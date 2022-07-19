import { SPLITS_STARTS, correctChampionDisplayName, INDEX_TO_ROLE, TEAMS } from './constants';

export async function fetchData(fullSeason = false) {
	const res = await fetch(`/api?fullSeason=${fullSeason}`);
	const json = await res.json();

	return json;
}

export function aggregateData(data = {}, leaderboard, fullSeason) {
	fullSeason = JSON.parse(fullSeason);
	const matches = (data.matches || []).filter((match) => {
		// Filter matches for season 2, split 1
		const matchStart = new Date(match.matchStart);
		const splitStart = new Date(SPLITS_STARTS.season2.split2);

		return fullSeason ? true : matchStart > splitStart ? true : false;
	});

	const aggregate = matches.reduce(
		(acc, curr) => {
			if (!curr) return acc;

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

			if (!acc.patches.includes(patch)) acc.patches.push(patch);

			for (const player of players) {
				const champ = correctChampionDisplayName(player.championIcon);
				const role = player.laneIndex;

				// Player Stats
				if (!acc.players[player.name]) acc.players[player.name] = {};
				const win = player.winner ? 1 : 0;

				acc.players[player.name] = {
					name: player.name,
					games: (acc.players[player.name]?.games || 0) + 1,
					wins: (acc.players[player.name]?.wins || 0) + win,
					kills: player.kills + (acc.players[player.name]?.kills || 0),
					deaths: player.deaths + (acc.players[player.name]?.deaths || 0),
					assists: player.assists + (acc.players[player.name]?.assists || 0)
				};

				// Champion Stats
				if (!acc.champions[champ]) acc.champions[champ] = {};

				const champRole = acc.champions[champ];
				const champPatches = champRole.patches || {};

				acc.champions[champ] = {
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
				const teamTag = player.name.split(' ')[0];
				const playerTeam = TEAMS[teamTag]?.tag;

				if (playerTeam) {
					if (!acc.teams[playerTeam]) acc.teams[playerTeam] = {};

					const teamPlayers = acc.teams[playerTeam].players || {};

					acc.teams[playerTeam] = {
						tag: playerTeam,
						games: (acc.teams[playerTeam]?.games || 0) + 1,
						wins: (acc.teams[playerTeam]?.wins || 0) + win,
						kills: player.kills + (acc.teams[playerTeam]?.kills || 0),
						deaths: player.deaths + (acc.teams[playerTeam]?.deaths || 0),
						assists: player.assists + (acc.teams[playerTeam]?.assists || 0),
						players: {
							...teamPlayers,
							[player.name]: true
						}
					};
				}
			}

			return acc;
		},
		{ players: {}, champions: {}, teams: {}, totalGames: matches.length, patches: [] }
	);

	// Current split/season
	const currSeasonId = 2;
	const currSplitId = 2;

	const currSeason = leaderboard.leaderboards.find(
		(s) => s.seasonId === currSeasonId && s.split?.splitId === currSplitId
	);

	return {
		fetchedAt: Date.now(),
		loading: false,
		matches,
		totalGames: matches.length,
		players: aggregate.players,
		patches: aggregate.patches,
		currentPatch: formatPatch(matches[0]?.gameVersion),
		champions: aggregate.champions,
		teams: aggregate.teams,
		seasonTitle: currSeason?.title || 'Unknown Season',
		splitTitle: currSeason?.split?.title || 'Unknown Split',
		splitEnd: currSeason?.split?.closeDate,
		leaderboard: (currSeason?.lineup || []).reduce((acc, curr) => {
			acc[curr.name] = curr;
			return acc;
		}, {})
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
	const major = patch[0] ?? 12;
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
		case winrate <= 0.3 || winrate >= 0.7:
			s = 100;
			break;
		case winrate <= 0.38 || winrate >= 0.62:
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
		default:
			s = 55;
			l = 90;
			a = 0.6;
			break;
	}

	return `hsla(${h} ${s}% ${l}% / ${a})`;
}
