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

				if (!acc.players[player.summonerId]) acc.players[player.summonerId] = {};
				const win = player.winner ? 1 : 0;
				const lpEarned = win ? 10 : -5;

				acc.players[player.summonerId] = {
					name: player.name,
					lp: (acc.players[player.summonerId]?.lp || 0) + lpEarned,
					games: (acc.players[player.summonerId]?.games || 0) + 1,
					wins: (acc.players[player.summonerId]?.wins || 0) + win,
					kills: player.kills + (acc.players[player.summonerId]?.kills || 0),
					deaths: player.deaths + (acc.players[player.summonerId]?.deaths || 0),
					assists: player.assists + (acc.players[player.summonerId]?.assists || 0)
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
					cs: player.cs + (champRole?.cs || 0),
					players: [...champPlayers, player.summonerId]
				};
			}

			return acc;
		},
		{ players: {}, champions: {}, totalGames: data.matches.length }
	);

	return {
		matches,
		totalGames: matches.length,
		players: Object.values(aggregate.players)
			.sort((a, b) => b.lp - a.lp)
			.map((p, i) => ({ ...p, rank: i + 1 })),
		champions: aggregate.champions
	};
}

export function findPlayerMatches(matches, name) {
	return (matches || []).filter((match) => {
		const team1 = match.teams[0].players.map((p) => p.name);
		const team2 = match.teams[1].players.map((p) => p.name);
		const teams = team1.concat(team2);

		return teams.includes(name);
	});
}

export function findChampionMatches(matches, champName) {
	return (matches || []).reduce(
		(acc, curr) => {
			const t1 = curr.teams[0];
			const t2 = curr.teams[1];
			const t1Players = t1.players.map((p) => ({ ...p, winner: t1.winner }));
			const t2Players = t2.players.map((p) => ({ ...p, winner: t2.winner }));
			const teams = t1Players.concat(t2Players);
			const champ = teams.find((p) => p.championIcon === champName);

			if (!champ) return acc;

			const winner = champ.winner ? 1 : 0;

			return {
				matches: [...acc.matches, curr],
				stats: {
					kills: champ.kills + (acc.players.kills || 0),
					deaths: champ.deaths + (acc.players.deaths || 0),
					assists: champ.assists + (acc.players.assists || 0),
					cs: champ.cs + (acc.players.cs || 0),
					games: (acc.players.games || 0) + 1,
					wins: (acc.players.wins || 0) + winner
				}
			};
		},
		{ matches: [], stats: {} }
	);
}
