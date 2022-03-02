import { INDEX_TO_ROLE } from './constants';

export function aggregateData(data = {}) {
	const matches = data.matches || [];

	const aggregate = matches.reduce(
		(acc, curr) => {
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

			for (const player of players) {
				const champ = player.championIcon;
				const role = player.laneIndex;

				if (!acc.players[player.name]) acc.players[player.name] = {};
				const win = player.winner ? 1 : 0;
				const lpEarned = win ? 10 : -5;
				const currLP = acc.players[player.name]?.lp ?? 0;

				acc.players[player.name] = {
					name: player.name,
					lp: currLP + lpEarned <= 0 ? 0 : currLP + lpEarned,
					games: (acc.players[player.name]?.games || 0) + 1,
					wins: (acc.players[player.name]?.wins || 0) + win,
					kills: player.kills + (acc.players[player.name]?.kills || 0),
					deaths: player.deaths + (acc.players[player.name]?.deaths || 0),
					assists: player.assists + (acc.players[player.name]?.assists || 0)
					// champions: [
					// 	...champs,
					// 	{
					// 		championIcon: champ,
					// 		win: player.winner,
					// 		lane: role
					// 	}
					// ]
				};

				if (!acc.champions[champ]) acc.champions[champ] = {};

				const champRole = acc.champions[champ];
				const champPlayers = acc.champions[champ].players || [];

				acc.champions[champ] = {
					name: champ,
					games: (champRole?.games || 0) + 1,
					wins: (champRole?.wins || 0) + win,
					kills: player.kills + (champRole?.kills || 0),
					deaths: player.deaths + (champRole?.deaths || 0),
					assists: player.assists + (champRole?.assists || 0),
					cs: player.cs + (champRole?.cs || 0)
				};
			}

			return acc;
		},
		{ players: {}, champions: {}, totalGames: matches.length }
	);

	return {
		fetchedAt: Date.now(),
		matches,
		totalGames: matches.length,
		players: Object.values(aggregate.players)
			.sort((a, b) => b.lp - a.lp || b.wins / b.games - a.wins / a.games || b.wins - a.wins)
			.map((p, i) => ({ ...p, rank: i + 1 })),
		champions: aggregate.champions
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

export function formatchPatch(version) {
	const patch = version.split('.');
	const major = patch[0] ?? 12;
	const minor = patch[1] ?? 'x';

	return `${major}.${minor}`;
}
