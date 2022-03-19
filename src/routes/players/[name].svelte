<script context="module">
	export const load = async ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import { onMount } from 'svelte';
	import RelativeTime from '@yaireo/relative-time';

	import { store, pageBackground } from '$lib/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import FavoriteBtn from '$lib/components/FavoriteBtn.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';
	import { ordinal } from '$lib/helpers';
	import { TEAMS, teamImg } from '$lib/constants';
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
			const teams = t1.concat(t2).map((p) => p.name);

			return teams.includes(name);
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

	$: noGamesPlayed = Object.keys(groups).length === 0;

	$: playerStats = ($store.players || {})[name];
	$: leaderboardStats = $store.leaderboard?.[name];
	$: team = Object.values(TEAMS).find((team) => {
		return name.toLowerCase().startsWith(team.tag.toLowerCase());
	});

	$: if (team) {
		pageBackground.set(teamImg(500, team.logo));
	}

	onMount(() => {
		return () => {
			pageBackground.set(null);
		};
	});
</script>

<svelte:head>
	<meta name="twitter:title" content={`${name} - Champions Queue`} />
	<title>{name} - Champion Queue</title>
</svelte:head>

<PageHeader title={name} player={name}>
	<div slot="controls">
		<!-- <RefreshBtn /> -->
		<FavoriteBtn />
	</div>
</PageHeader>

{#if playerStats}
	<div class="statblocks">
		<div class="statblock">
			<h3 class="stat">{ordinal(leaderboardStats.rank)}</h3>
			<span class="stat-name">Rank</span>
		</div>
		<div class="statblock">
			<h3 class="stat">{playerStats.lp.toLocaleString('en-us')}</h3>
			<span class="stat-name">LP</span>
		</div>
		{#if leaderboardStats}
			<div class="statblock">
				<h3 class="stat">{leaderboardStats.seasonPoints}</h3>
				<span class="stat-name">Season Pts</span>
			</div>
		{/if}
		<!-- <div class="statblock">
			<h3 class="stat">{playerStats.games.toLocaleString('en-us')}</h3>
			<span class="stat-name">Games</span>
		</div> -->
		<div class="statblock">
			<h3 class="stat" style:color={winrateColor(playerStats.wins / playerStats.games)}>
				{(playerStats.wins / (playerStats.games || 1)).toLocaleString('en-us', {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
					style: 'percent'
				})}
				<span>{playerStats.wins}W - {playerStats.games - playerStats.wins}L</span>
			</h3>
			<span class="stat-name">Win-Rate</span>
		</div>
		<div class="statblock">
			<h3 class="stat">
				{((playerStats.kills + playerStats.assists) / (playerStats.deaths || 1)).toLocaleString(
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

{#if !noGamesPlayed}
	{#each Object.entries(groups) as [daysAgo, matches]}
		<div class="list-groups">
			<p class="group-title">{daysAgo}</p>
			<ol>
				<ul class="list">
					{#each matches as match}
						<Match {match} player={name} />
					{/each}
				</ul>
			</ol>
		</div>
	{/each}
{:else if !$store.loading}
	<div class="no-games">
		<h4>This player hasn't played any games this split 😞</h4>
	</div>
{/if}

{#if list.length >= (pageIndex + 1) * perPage}
	<LoadMoreBtn block onclick={() => pageIndex++} />
{/if}

<style>
	.no-games {
		display: grid;
		place-content: center;
		min-height: 80vh;
		font-size: 1.5rem;
		text-align: center;
	}
</style>
