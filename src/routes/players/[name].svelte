<script context="module">
	export const load = async ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import { onMount } from 'svelte';

	import { store, pageBackground } from '$lib/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import FavoriteBtn from '$lib/components/FavoriteBtn.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';
	import { ordinal } from '$lib/helpers';
	import { TEAMS, teamImg } from '$lib/constants';
	import { winrateColor } from '$lib/helpers';

	export let name;
	const perPage = 20;
	let pageIndex = 0;

	$: matches = $store.matches || [];

	$: list = matches
		.filter((match) => {
			const t1 = match.teams[0].players;
			const t2 = match.teams[1].players;
			const teams = t1.concat(t2).map((p) => p.name);

			return teams.includes(name);
		})
		.slice(0, (pageIndex + 1) * perPage);

	$: playerStats = ($store.players || []).find((p) => p.name === name);
	$: leaderboardStats = $store.leaderboard[name];
	$: team = TEAMS.find((team) => {
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

<PageHeader title={name} player={name}>
	<div slot="controls">
		<!-- <RefreshBtn /> -->
		<FavoriteBtn />
	</div>
</PageHeader>

{#if playerStats}
	<div class="statblocks">
		<div class="statblock">
			<h3 class="stat">{ordinal(playerStats.rank)} <span>/ {$store.players.length}</span></h3>
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
		<div class="statblock">
			<h3 class="stat">{playerStats.games.toLocaleString('en-us')}</h3>
			<span class="stat-name">Games</span>
		</div>
		<div class="statblock">
			<h3 class="stat" style:color={winrateColor(playerStats.wins / playerStats.games)}>
				{(playerStats.wins / (playerStats.games || 1)).toLocaleString('en-us', {
					minimumFractionDigits: 1,
					maximumFractionDigits: 1,
					style: 'percent'
				})}
				<span>{playerStats.wins}/{playerStats.games - playerStats.wins}</span>
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

<ul class="list">
	{#each list as match}
		<Match {match} player={name} />
	{/each}
</ul>

{#if list.length}
	<LoadMoreBtn block onclick={() => pageIndex++} />
{/if}
