import {
	CURR_YEAR,
	CURR_SEASON,
	CURR_SPLIT,
	correctChampionDisplayName,
	correctPlayerName,
	INDEX_TO_ROLE
} from '$lib/constants';
import { formatPatch, findPlayerTeam } from '$lib/helpers';

import leaderboardJSON from '$lib/data/8-1-2023-leaderboards.json';
import matchesJSON from '$lib/data/8-1-2023-matches.json';

export async function get() {
	// const leaderboardRes = await fetch('https://d1fodqbtqsx6d3.cloudfront.net/leaderboards.json');
	// const leaderboardJSON = await leaderboardRes.json();

	// const matchesRes = await fetch('https://d1fodqbtqsx6d3.cloudfront.net/matches.json');
	// const matchesJSON = await matchesRes.json();

	// var startTime = performance.now();
	const agg = aggregateData(matchesJSON, leaderboardJSON);
	// var endTime = performance.now();

	// console.log(`Call to aggregateData took ${endTime - startTime} milliseconds`);

	return {
		body: agg
	};
}

function aggregateData(data = {}, leaderboard = {}) {
	// Find the current season/split info from leaderboard
	const { leaderboards = [] } = leaderboard;
	const currSeason =
		leaderboards.find((s) => {
			const correctYear = s.year === CURR_YEAR;
			const correctSeason = s.seasonId === CURR_SEASON;
			const correctSplit = s.split?.splitId === CURR_SPLIT;

			return correctYear && correctSeason && correctSplit;
		}) || leaderboards[leaderboards.length - 1];

	// Aggregate matches & stats
	const aggregate = { matches: [], players: {}, champions: {}, teams: {}, patches: [] };
	const MAX_MATCHES = 2000;

	let i = 0;
	for (const curr of data.matches || []) {
		if (i > MAX_MATCHES) break; // Hard cap server iterations

		const matchStart = new Date(curr.matchStart);
		const splitStart = new Date(currSeason.openDate);

		// Skip match if its from before the current season
		if (matchStart < splitStart) continue;

		aggregate.matches.push(curr);

		const team1 = curr.teams[0].players.map((player, i) => ({
			...player,
			laneIndex: INDEX_TO_ROLE[i],
			winner: curr.teams[0].winner
		}));
		const team2 = curr.teams[1].players.map((player, i) => ({
			...player,
			laneIndex: INDEX_TO_ROLE[i],
			winner: curr.teams[1].winner
		}));
		const players = [...team1, ...team2];
		const patch = formatPatch(curr.gameVersion);

		if (!aggregate.patches.includes(patch)) aggregate.patches.push(patch);

		for (const player of players) {
			const champ = correctChampionDisplayName(player.championIcon);
			const playerName = correctPlayerName(player.name);
			// const role = player.laneIndex;

			// Player Stats
			if (!aggregate.players[playerName]) aggregate.players[playerName] = {};
			const win = player.winner ? 1 : 0;

			aggregate.players[playerName] = {
				name: playerName,
				games: (aggregate.players[playerName]?.games || 0) + 1,
				wins: (aggregate.players[playerName]?.wins || 0) + win,
				kills: player.kills + (aggregate.players[playerName]?.kills || 0),
				deaths: player.deaths + (aggregate.players[playerName]?.deaths || 0),
				assists: player.assists + (aggregate.players[playerName]?.assists || 0)
			};

			// Champion Stats
			if (!aggregate.champions[champ]) aggregate.champions[champ] = {};

			const champRole = aggregate.champions[champ];
			const champPatches = champRole.patches || {};

			aggregate.champions[champ] = {
				name: champ,
				games: (champRole?.games || 0) + 1,
				wins: (champRole?.wins || 0) + win,
				kills: player.kills + (champRole?.kills || 0),
				deaths: player.deaths + (champRole?.deaths || 0),
				assists: player.assists + (champRole?.assists || 0),
				cs: player.cs + (champRole?.cs || 0),
				patches: {
					...champPatches,
					[patch]: true
				}
			};

			// Team Stats
			const playerTeam = findPlayerTeam(playerName)?.tag;

			if (playerTeam) {
				if (!aggregate.teams[playerTeam]) aggregate.teams[playerTeam] = {};

				const teamPlayers = aggregate.teams[playerTeam].players || {};

				aggregate.teams[playerTeam] = {
					tag: playerTeam,
					games: (aggregate.teams[playerTeam]?.games || 0) + 1,
					wins: (aggregate.teams[playerTeam]?.wins || 0) + win,
					kills: player.kills + (aggregate.teams[playerTeam]?.kills || 0),
					deaths: player.deaths + (aggregate.teams[playerTeam]?.deaths || 0),
					assists: player.assists + (aggregate.teams[playerTeam]?.assists || 0),
					players: {
						...teamPlayers,
						[playerName]: true
					}
				};
			}
		}

		i += 1;
	}

	return {
		fetchedAt: Date.now(),
		loading: false,
		matches: aggregate.matches,
		totalGames: aggregate.matches.length,
		players: aggregate.players,
		patches: aggregate.patches,
		currentPatch: formatPatch(aggregate.matches[0]?.gameVersion),
		champions: aggregate.champions,
		teams: aggregate.teams,
		seasonTitle: currSeason?.title || 'Unknown Season',
		splitTitle: currSeason?.split?.title,
		seasonEnd: currSeason?.closeDate,
		leaderboard: (currSeason?.lineup || []).reduce(
			(acc, curr) => {
				acc.players[curr.name] = curr;

				// set highest and lowest lp
				if (curr.lp > acc.maxLP) acc.maxLP = curr.lp;
				if (curr.lp < acc.minLP) acc.minLP = curr.lp;

				return acc;
			},
			{ players: {}, minLP: 0, maxLP: 0, minWR: 0, maxWR: 0 }
		)
	};
}
