<script context="module">
	export const prerender = true;
	export const load = async () => {
		return { props: { title: 'Players' } };
	};
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';
	import { store } from '$lib/stores';

	export let title;
	let search = '';
	let sort = 'lp';
	let desc = true;

	$: players = $store.players || [];
	$: list = players
		.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
		.map((p) => ({ ...p, winrate: p.wins / p.games, kda: (p.kills + p.assists) / (p.deaths || 1) }))
		.sort((a, b) => (desc ? b[sort] - a[sort] : a[sort] - b[sort]));

	function setSort(col) {
		if (sort !== col) sort = col;
		else desc = !desc;
	}
</script>

<PageHeader {title} />
<div class="controls">
	<input class="search" placeholder="Search Players" bind:value={search} />
</div>
<div class="sort">
	<span class="nameSort">Name</span>
	<span class="stat"> Rank </span>
	<span class="stat" on:click={() => setSort('lp')}>
		LP
		{#if sort === 'lp'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('kda')}>
		KDA
		{#if sort === 'kda'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('winrate')}>
		Win-Rate
		{#if sort === 'winrate'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat">W/L</span>
</div>
<ul class="list">
	{#each list as player}
		<li>
			<a href={`/players/${player.name}`}>
				<p class="name">{player.name}</p>
				<span class="stat">
					{player.rank}
				</span>
				<span class="stat">
					{player.lp}
				</span>
				<span class="stat">
					{((player.kills + player.assists) / (player.deaths || 1)).toLocaleString('en-us', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat">
					{(player.wins / player.games).toLocaleString('en-us', {
						style: 'percent',
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat">
					{player.wins} / {player.games - player.wins}
				</span>
			</a>
		</li>
	{/each}
</ul>

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
		font-size: 3rem;
	}
	.statBlock span {
		display: block;
		color: var(--c4);
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: calc(var(--gap) / 3);
	}

	.list li a,
	.sort {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: 1px;
		text-align: center;
		background: var(--c2);
	}

	.list li {
		font-size: 1.175rem;
	}

	.list li a:hover {
		background: var(--c3);
	}

	.list .name {
		width: 15rem;
		font-weight: 800;
		text-transform: uppercase;
		text-align: left;
		letter-spacing: 2px;
	}

	.stat {
		flex: 1;
	}

	.sort {
		background: transparent;
		font-weight: 700;
		font-size: 0.875rem;
		padding-bottom: 1rem;
		user-select: none;
	}
	.sort > * {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		cursor: pointer;
	}
	:global(.sort > * svg) {
		width: 1rem;
		height: 1rem;
	}
	.nameSort {
		justify-content: flex-start;
		width: 15rem;
	}
</style>
