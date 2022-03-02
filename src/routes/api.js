import { aggregateData } from '$lib/helpers';

export async function get() {
	const leaderboardRes = await fetch('https://d1fodqbtqsx6d3.cloudfront.net/leaderboards.json');
	const leaderboardJSON = await leaderboardRes.json();

	const matchesRes = await fetch('https://d1fodqbtqsx6d3.cloudfront.net/matches.json');
	const matchesJSON = await matchesRes.json();
	const agg = aggregateData(matchesJSON, leaderboardJSON);

	return {
		body: agg
	};
}
