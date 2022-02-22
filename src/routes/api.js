import { aggregateData } from '$lib/helpers';

export async function get() {
	const matchesRes = await fetch('https://d1fodqbtqsx6d3.cloudfront.net/matches.json');
	const matchesJSON = await matchesRes.json();
	const agg = aggregateData(matchesJSON);

	return {
		body: agg
	};
}
