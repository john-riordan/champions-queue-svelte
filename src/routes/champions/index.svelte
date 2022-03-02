<script context="module">
	export const load = async () => ({ props: { title: 'Champions' } });
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';

	import { store } from '$lib/stores';

	export let title;

	let search = '';
	let sort = 'games';
	let desc = true;
	const champSize = 56;

	$: champions = $store.champions || {};
	$: totalGames = $store.totalGames || 1;
	$: list = Object.values(champions)
		.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
		.map((champ) => ({
			...champ,
			winrate: champ.wins / champ.games,
			playRate: champ.games / totalGames,
			kda: (champ.kills + champ.assists) / champ.games,
			cs: champ.cs / champ.games
		}))
		.sort((a, b) => (desc ? b[sort] - a[sort] : a[sort] - b[sort]));

	function setSort(col) {
		if (sort !== col) sort = col;
		else desc = !desc;
	}
</script>

<PageHeader {title} />
<div class="controls">
	<input type="text" class="search" placeholder="Search Champions" bind:value={search} />
</div>

<div class="sort">
	<span class="nameSort">Name</span>
	<span class="stat" on:click={() => setSort('games')}>
		Games
		{#if sort === 'games'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('winrate')}>
		Win-Rate
		{#if sort === 'winrate'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('playrate')}>
		Play-Rate
		{#if sort === 'playrate'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('kda')}>
		KDA
		{#if sort === 'kda'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('cs')}>
		CS/G
		{#if sort === 'cs'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
</div>
<ul class="list">
	{#each list as champ}
		<li>
			<a href={`/champions/${champ.name}`}>
				<div class="info">
					<ChampImg name={champ.name} --size={champSize} size={champSize} />
					<h4 class="name">{champ.name}</h4>
				</div>
				<span class="stat">
					{champ.games.toLocaleString('en-us', {
						minimumFractionDigits: 0,
						maximumFractionDigits: 0
					})}
				</span>
				<span class="stat">
					{(champ.wins / champ.games).toLocaleString('en-us', {
						style: 'percent',
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat">
					{champ.playRate.toLocaleString('en-us', {
						style: 'percent',
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat">
					{((champ.kills + champ.assists) / champ.games).toLocaleString('en-us', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat">
					{champ.cs.toLocaleString('en-us', {
						minimumFractionDigits: 0,
						maximumFractionDigits: 0
					})}
				</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.list li a,
	.sort {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem;
		font-weight: 300;
		letter-spacing: 1px;
		text-align: center;
		background: var(--c2);
		transition: background ease 0.15s;
	}

	.list li a {
		border-top: 2px solid var(--app-bg);
		border-bottom: 2px solid var(--app-bg);
	}

	.list li {
		font-size: 1.175rem;
	}

	.list li a:hover {
		background: var(--c3);
	}

	.list .info {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.list .name {
		width: 14rem;
		font-weight: 700;
		text-align: left;
	}

	.stat {
		flex: 1;
	}

	.sort {
		background: transparent;
		font-weight: 700;
		font-size: 0.875rem;
		text-transform: uppercase;
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
		width: 14rem;
		margin-left: 4.5rem;
	}
</style>
