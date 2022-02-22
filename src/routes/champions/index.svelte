<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';

	import { store } from '$lib/stores';

	let search = '';
	let sort = 'games';
	let desc = true;

	$: champions = $store.aggregate?.champions || {};
	$: totalGames = $store.aggregate?.totalGames || 1;
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

<PageHeader title="Champions" />

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
					<ChampImg name={champ.name} />
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

	.list li a:hover {
		background: var(--c3);
	}

	.list .info {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.list .name {
		width: 15rem;
		font-size: 1.25rem;
		font-weight: 800;
		text-transform: uppercase;
		text-align: left;
		letter-spacing: 2px;
	}

	.stat {
		width: 10rem;
	}

	.list .stat {
		font-size: 1.25rem;
	}

	.sort {
		background: transparent;
		font-weight: 700;
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
		width: 15rem;
		margin-left: 4rem;
		text-align: left;
	}
</style>
