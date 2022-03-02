<script context="module">
	export const load = async ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import { onMount } from 'svelte';

	import PageHeader from '$lib/components/PageHeader.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';
	import { ordinal } from '$lib/helpers';
	import { store, pageBackground } from '$lib/stores';
	import { TEAMS, teamImg } from '$lib/constants';

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
	$: team = TEAMS.find((team) => {
		return name.toLowerCase().startsWith(team.tag.toLowerCase());
	});

	$: {
		if (team) {
			pageBackground.set(teamImg(500, team.logo));
		}
	}

	onMount(() => {
		return () => {
			pageBackground.set(null);
		};
	});

	// $: lpHistory = list.reduce((acc, curr) => {
	// 	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	// 	const firstDate = new Date();
	// 	const secondDate = new Date(curr.matchStart);
	// 	const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

	// 	if (!acc[diffDays]) acc[diffDays] = 0;
	// 	const win = curr.victory ? 10 : -5;
	// 	acc[diffDays] += win;

	// 	return acc;
	// }, {});
</script>

<PageHeader title={name} player={name} imageSize={62} />
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
		<div class="statblock">
			<h3 class="stat">{playerStats.games.toLocaleString('en-us')}</h3>
			<span class="stat-name">Games</span>
		</div>
		<div class="statblock">
			<h3 class="stat">
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
<ul class="matchlist">
	{#each list as match}
		<Match {match} player={name} />
	{/each}
</ul>
{#if list.length}
	<LoadMoreBtn block onclick={() => pageIndex++} />
{/if}

<style>
	.matchlist {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	}
</style>
