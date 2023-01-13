import {
	CURR_YEAR,
	CURR_SEASON,
	CURR_SPLIT,
	correctChampionDisplayName,
	INDEX_TO_ROLE,
	TEAMS
} from './constants';

export async function fetchData() {
	const res = await fetch(`/api`);
	const json = await res.json();

	return json;
}

export function findPlayerTeam(playerName = '') {
	const teamTag = playerName.split(' ')[0];
	return TEAMS[teamTag];
}

export function normalizeChampionName(championName = '') {
	return championName.replace(' ', '').toLowerCase();
}

export function aggregateData(data = {}, leaderboard = {}) {
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
		const splitEnd = new Date(currSeason.closeDate);

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
			const role = player.laneIndex;

			// Player Stats
			if (!aggregate.players[player.name]) aggregate.players[player.name] = {};
			const win = player.winner ? 1 : 0;

			aggregate.players[player.name] = {
				name: player.name,
				games: (aggregate.players[player.name]?.games || 0) + 1,
				wins: (aggregate.players[player.name]?.wins || 0) + win,
				kills: player.kills + (aggregate.players[player.name]?.kills || 0),
				deaths: player.deaths + (aggregate.players[player.name]?.deaths || 0),
				assists: player.assists + (aggregate.players[player.name]?.assists || 0)
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
			const playerTeam = findPlayerTeam(player.name)?.tag;

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
						[player.name]: true
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
		seasonEnd: currSeason?.closeDate,
		splitTitle: currSeason?.split?.title || 'Unknown Split',
		season: currSeason,
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

export function ordinal(i) {
	const j = i % 10,
		k = i % 100;
	if (j == 1 && k != 11) return i + 'st';
	if (j == 2 && k != 12) return i + 'nd';
	if (j == 3 && k != 13) return i + 'rd';
	return i + 'th';
}

export function formatPatch(version) {
	if (!version) return '';
	const patch = version.split('.');
	const major = patch[0] ?? 13;
	const minor = patch[1] ?? 'x';

	return `${major}.${minor}`;
}

export function msToDays(ms) {
	return ms / 1000 / 60 / 60 / 24;
}
export function msToHours(ms) {
	return ms / 1000 / 60 / 60;
}
export function msToMins(ms) {
	return ms / 1000 / 60;
}
export function msToSecs(ms) {
	return ms / 1000;
}

export function winrateColor(winrate) {
	const h = winrate < 0.5 ? 'var(--red-h)' : 'var(--blue-h)';
	let s = 100;
	let l = 65;
	let a = 1;

	switch (true) {
		case winrate <= 0.2 || winrate >= 0.8:
			s = 95;
			break;
		case winrate <= 0.25 || winrate >= 0.75:
			s = 92;
			l = 70;
			break;
		case winrate <= 0.4 || winrate >= 0.6:
			s = 90;
			l = 75;
			break;
		case winrate <= 0.46 || winrate >= 0.54:
			s = 75;
			l = 85;
			a = 0.85;
			break;
		case winrate <= 0.48 || winrate >= 0.52:
			s = 70;
			l = 80;
			a = 0.75;
			break;
		case winrate <= 0.49 || winrate >= 0.51:
			s = 65;
			l = 85;
			a = 0.6;
			break;
		default:
			s = 55;
			l = 90;
			a = 0.6;
			break;
	}

	return `hsla(${h} ${s}% ${l}% / ${a})`;
}
