import { aggregateData } from '$lib/helpers';

export async function get({ url }) {
	const leaderboardRes = await fetch('https://d1fodqbtqsx6d3.cloudfront.net/leaderboards.json');
	const leaderboardJSON = await leaderboardRes.json();

	const matchesRes = await fetch('https://d1fodqbtqsx6d3.cloudfront.net/matches.json');
	const matchesJSON = await matchesRes.json();

	const fullSeason = url.searchParams.get('fullSeason');
	const agg = aggregateData(matchesJSON, leaderboardJSON, fullSeason);

	return {
		body: agg
	};
}
