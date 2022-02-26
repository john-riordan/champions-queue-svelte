<script>
	import { page } from '$app/stores';

	import PageHeader from '$lib/components/PageHeader.svelte';
	import Match from '$lib/components/Match.svelte';
	import { store } from '$lib/stores';

	const perPage = 20;
	let pageIndex = 0;

	$: name = $page.params.name;
	$: matches = $store.matches || [];

	$: list = matches
		.filter((match) => {
			const t1 = match.teams[0].players;
			const t2 = match.teams[1].players;
			const teams = t1.concat(t2).map((p) => p.championIcon);

			return teams.includes(name);
		})
		.slice(0, (pageIndex + 1) * perPage)
		.map((match) => {
			const t1 = match.teams[0].players.map((p) => ({ ...p, winner: match.teams[0].winner }));
			const t2 = match.teams[1].players.map((p) => ({ ...p, winner: match.teams[1].winner }));
			const teams = t1.concat(t2);
			const player = teams.find((p) => p.championIcon === name);

			return {
				...match,
				stats: player,
				victory: player.winner
			};
		});

	$: champions = $store.champions || {};
	$: champStats = champions[name];
</script>

<PageHeader title={name} />
{#if champStats}
	<div class="statBlocks">
		<div class="statBlock">
			<h3 class="stat">{champStats.games.toLocaleString('en-us')}</h3>
			<span>Games</span>
		</div>
		<div class="statBlock">
			<h3 class="stat">
				{(champStats.wins / (champStats.games || 1)).toLocaleString('en-us', {
					minimumFractionDigits: 1,
					maximumFractionDigits: 1,
					style: 'percent'
				})}
			</h3>
			<span>Win-Rate</span>
		</div>
		<div class="statBlock">
			<h3 class="stat">
				{((champStats.kills + champStats.assists) / (champStats.deaths || 1)).toLocaleString(
					'en-us',
					{
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					}
				)}
			</h3>
			<span>KDA</span>
		</div>
	</div>
{/if}
<ul class="matchlist">
	{#each list as match}
		<Match {match} />
	{/each}
</ul>
{#if list.length}
	<button on:click={() => pageIndex++}>Load More</button>
{/if}

<style>
	.statBlocks {
		display: flex;
		margin-bottom: 2rem;
		gap: 1rem;
	}
	.statBlock {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 2rem;
		background: var(--c2);
	}
	.statBlock .stat {
		font-size: 2.5rem;
	}
	.statBlock span {
		display: block;
		color: var(--c4);
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	.matchlist {
		display: flex;
		flex-direction: column;
		gap: calc(var(--gap) / 3);
	}
</style>
