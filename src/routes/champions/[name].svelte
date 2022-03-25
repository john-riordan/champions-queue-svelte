<script context="module">
	export const load = async ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import RelativeTime from '@yaireo/relative-time';

	import { store } from '$lib/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import FavoriteBtn from '$lib/components/FavoriteBtn.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';
	import { correctChampionDisplayName } from '$lib/constants';
	import { winrateColor, msToDays } from '$lib/helpers';

	export let name;
	const perPage = 20;
	let pageIndex = 0;
	const relativeTime = new RelativeTime();

	$: matches = $store.matches || [];
	$: list = matches
		.filter((match) => {
			const t1 = match.teams[0].players;
			const t2 = match.teams[1].players;
			const teams = t1.concat(t2).map((p) => correctChampionDisplayName(p.championIcon));

			return teams.includes(name);
		})
		.slice(0, (pageIndex + 1) * perPage)
		.map((match) => {
			const t1 = match.teams[0].players.map((p) => ({ ...p, winner: match.teams[0].winner }));
			const t2 = match.teams[1].players.map((p) => ({ ...p, winner: match.teams[1].winner }));
			const teams = t1.concat(t2);
			const player = teams.find((p) => correctChampionDisplayName(p.championIcon) === name);

			return {
				...match,
				stats: player,
				victory: player.winner
			};
		});

	$: groups = list.reduce((acc, curr) => {
		const time = new Date(curr.matchStart);
		const currTime = Date.now();
		const dayDiff = Math.trunc(msToDays(currTime - time));
		const dateRelative = relativeTime.from(time);
		const diff = dayDiff < 1 ? 'Within Last Day' : dateRelative;

		if (!acc[diff]) acc[diff] = [];
		acc[diff] = [...acc[diff], curr];

		return acc;
	}, {});

	$: champions = $store.champions || {};
	$: champStats = champions[name];
</script>

<svelte:head>
	<meta name="twitter:title" content={`${name} - Champions Queue`} />
	<title>{name} - Champions Queue</title>
</svelte:head>

<PageHeader title={name} champion={name}>
	<div slot="controls">
		<!-- <RefreshBtn /> -->
		<FavoriteBtn />
	</div>
</PageHeader>

{#if champStats}
	<div class="statblocks">
		<div class="statblock">
			<h3 class="stat">{champStats.games.toLocaleString('en-us')}</h3>
			<span class="stat-name">Games</span>
		</div>
		<div class="statblock">
			<h3 class="stat" style:color={winrateColor(champStats.wins / champStats.games)}>
				{(champStats.wins / (champStats.games || 1)).toLocaleString('en-us', {
					minimumFractionDigits: 1,
					maximumFractionDigits: 1,
					style: 'percent'
				})}
				<span>{champStats.wins}/{champStats.games - champStats.wins}</span>
			</h3>
			<span class="stat-name">Win-Rate</span>
		</div>
		<div class="statblock">
			<h3 class="stat">
				{((champStats.kills + champStats.assists) / (champStats.deaths || 1)).toLocaleString(
					'en-us',
					{
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					}
				)}
			</h3>
			<span class="stat-name">KDA</span>
		</div>
	</div>
{/if}

{#each Object.entries(groups) as [daysAgo, matches]}
	<div class="list-groups">
		<p class="group-title">{daysAgo}</p>
		<ol>
			<ul class="list">
				{#each matches as match}
					<Match {match} champion={name} />
				{/each}
			</ul>
		</ol>
	</div>
{/each}

{#if list.length >= (pageIndex + 1) * perPage}
	<LoadMoreBtn block onclick={() => pageIndex++} />
{/if}
