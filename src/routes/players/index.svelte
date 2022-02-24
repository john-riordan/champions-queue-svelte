<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';
	import { store } from '$lib/stores';

	let search = '';
	let list = [];
	let sort = 'lp';
	let desc = true;

	$: players = $store.aggregate?.players || {};
	$: list = Object.values(players)
		.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
		.sort((a, b) => (desc ? b[sort] - a[sort] : a[sort] - b[sort]));

	function setSort(col) {
		if (sort !== col) sort = col;
		else desc = !desc;
	}
</script>

<PageHeader title="Players" />
<div class="controls">
	<input class="search" placeholder="Search Players" bind:value={search} />
</div>
<div class="sort">
	<span class="nameSort">Name</span>
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
	<span class="stat"> W/L </span>
	<span class="stat" on:click={() => setSort('cs')}>
		Games
		{#if sort === 'games'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
</div>
<ul class="list">
	{#each list as player}
		<li>
			<a href={`/players/${player.name}`}>
				<p class="name">{player.name}</p>
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
				<span class="stat">
					{player.games}
				</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	.controls {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.list,
	.matchlist {
		display: flex;
		flex-direction: column;
		gap: calc(var(--gap) / 3);
	}

	.list li a,
	.sort {
		--player-bg: var(--c2);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		font-weight: 300;
		letter-spacing: 1px;
		background: var(--player-bg);
	}
	.list li a:hover {
		--player-bg: var(--c3);
	}

	.list .name {
		width: 20ch;
		font-size: 1.25rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
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

	.list .stat {
		font-size: 1.25rem;
	}

	.list .champs {
		display: flex;
		gap: 0.25rem;
	}

	.champBlock {
		position: relative;
	}

	.winPip,
	.lossPip {
		position: absolute;
		width: 8px;
		height: 8px;
		top: 0;
		left: 0;
		box-shadow: 0 0 0 4px var(--player-bg);
	}
	.winPip {
		background: var(--green);
	}
	.lossPip {
		background: var(--red);
	}

	.match {
		display: flex;
		justify-content: space-between;
	}

	.matchlist li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		font-weight: 300;
		letter-spacing: 1px;
		background: var(--c2);
	}
	.matchlist .champs {
		display: flex;
		gap: 0.25rem;
	}
</style>
