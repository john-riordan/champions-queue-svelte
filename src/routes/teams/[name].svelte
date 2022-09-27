<script context="module">
	export const load = async ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import { onMount } from 'svelte';
	import RelativeTime from '@yaireo/relative-time';

	import { store, pageBackground } from '$lib/stores';
	import { TEAMS_WORLDS as TEAMS, teamImg } from '$lib/constants';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import FavoriteBtn from '$lib/components/FavoriteBtn.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';
	import { ordinal } from '$lib/helpers';
	import { winrateColor, msToDays } from '$lib/helpers';

	export let name;
	const perPage = 20;
	let pageIndex = 0;
	const relativeTime = new RelativeTime();

	$: teams = $store.teams || {};
	$: teamInfo = Object.values(TEAMS).find((team) => team.name === name);
	$: teamData = teamInfo && teams[teamInfo.tag];
	$: teamPlayers = teamData && Object.keys(teamData.players);

	$: matches = $store.matches || [];

	$: list = matches
		.filter((match) => {
			const t1 = match.teams[0].players;
			const t2 = match.teams[1].players;
			const teams = t1.concat(t2).map((p) => p.name);

			return teams.some((p) => teamPlayers.includes(p));
		})
		.slice(0, (pageIndex + 1) * perPage);

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

	$: teamStats = null;

	$: if (teamInfo) {
		pageBackground.set(teamImg(500, teamInfo.logo));
	}

	onMount(() => {
		return () => {
			pageBackground.set(null);
		};
	});
</script>

<svelte:head>
	<meta name="twitter:title" content={`${name}- ChampionsQueue.gg`} />
	<title>{name}- ChampionsQueue.gg</title>
</svelte:head>

<PageHeader title={name} team={name}>
	<div slot="controls">
		<!-- <RefreshBtn /> -->
		<FavoriteBtn />
	</div>
</PageHeader>

{#if teamStats}
	<div class="statblocks">
		<div class="statblock">
			<h3 class="stat">{ordinal(teamStats.rank)}</h3>
			<span class="stat-name">Rank</span>
		</div>
		<div class="statblock">
			<h3 class="stat">{teamStats.lp.toLocaleString('en-us')}</h3>
			<span class="stat-name">LP</span>
		</div>
		<!-- <div class="statblock">
			<h3 class="stat">{teamStats.games.toLocaleString('en-us')}</h3>
			<span class="stat-name">Games</span>
		</div> -->
		<div class="statblock">
			<h3 class="stat" style:color={winrateColor(teamStats.wins / teamStats.games)}>
				{(teamStats.wins / (teamStats.games || 1)).toLocaleString('en-us', {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
					style: 'percent'
				})}
				<span>{teamStats.wins}W - {teamStats.games - teamStats.wins}L</span>
			</h3>
			<span class="stat-name">Win-Rate</span>
		</div>
		<div class="statblock">
			<h3 class="stat">
				{((teamStats.kills + teamStats.assists) / (teamStats.deaths || 1)).toLocaleString('en-us', {
					minimumFractionDigits: 1,
					maximumFractionDigits: 1
				})}
			</h3>
			<span class="stat-name">KDA</span>
		</div>
	</div>
{/if}

<div class="list-groups">
	{#each Object.entries(groups) as [daysAgo, matches]}
		<div class="list-group">
			<p class="group-title lg">{daysAgo}</p>
			<ol>
				<ul class="list">
					{#each matches as match}
						<Match {match} />
					{/each}
				</ul>
			</ol>
		</div>
	{/each}
</div>

{#if list.length >= (pageIndex + 1) * perPage}
	<LoadMoreBtn block onclick={() => pageIndex++} />
{/if}
