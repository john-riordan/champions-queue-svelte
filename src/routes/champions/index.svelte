<script context="module">
	export const load = async () => ({ props: { title: 'Champions' } });
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import WinRateBar from '$lib/components/WinRateBar.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import Select from '$lib/components/Select.svelte';
	import CheckChecked from '$lib/components/icons/CheckChecked.svelte';
	import CheckUnchecked from '$lib/components/icons/CheckUnchecked.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';
	import { winrateColor } from '$lib/helpers';

	import { store } from '$lib/stores';

	export let title;

	const champSize = 56;

	let search = '';
	let sort = 'games';
	let patch;
	let desc = true;
	let commonOnly = false;
	let recentOnly = false;

	$: champions = $store.champions || {};
	$: totalGames = $store.totalGames || 1;
	$: patches = ($store.patches || []).map((p) => ({ value: p, text: `Patch ${p}` }));
	$: list = Object.values(champions)
		.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
		.map((champ) => ({
			...champ,
			winrate: champ.wins / champ.games,
			playRate: champ.games / totalGames,
			kda: (champ.kills + champ.assists) / champ.games,
			cs: champ.cs / champ.games
		}))
		.sort((a, b) => (desc ? b[sort] - a[sort] : a[sort] - b[sort]))
		.filter((c) => {
			return (commonOnly ? c.games / totalGames > 0.02 : true) && (patch ? c.patches[patch] : true);
		});

	function setSort(col) {
		if (sort !== col) sort = col;
		else desc = !desc;
	}
	function setPatch(event) {
		patch = event.detail;
	}
</script>

<svelte:head>
	<meta name="twitter:title" content={`Champions- Champions Queue`} />
	<title>Champions - Champions Queue</title>
</svelte:head>

<PageHeader {title} center>
	<!-- <div slot="controls">
		<RefreshBtn />
	</div> -->
</PageHeader>

<div class="controls">
	<input type="text" class="search" placeholder="Search Champions" bind:value={search} />
	<label class="boolean-btn" class:checked={commonOnly} for="hide-low">
		<span>Hide Low Play-Rate</span>
		<input type="checkbox" bind:checked={commonOnly} id="hide-low" />
		{#if commonOnly}
			<CheckChecked />
		{:else}
			<CheckUnchecked />
		{/if}
	</label>
	{#if patches.length}
		<Select defaultText="Patch" value={patch} options={patches} on:select={setPatch} />
	{/if}
</div>

<div class="sort">
	<span class="nameSort">Name</span>
	<span class="stat sortable" on:click={() => setSort('games')}>
		Games
		{#if sort === 'games'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat sortable" on:click={() => setSort('winrate')}>
		WR
		{#if sort === 'winrate'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat sortable playrate" on:click={() => setSort('playrate')}>
		W/L
		{#if sort === 'playrate'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat kda sortable" on:click={() => setSort('kda')}>
		KDA
		{#if sort === 'kda'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat sortable cs" on:click={() => setSort('cs')}>
		CS/G
		{#if sort === 'cs'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
</div>

<ul class="list">
	{#each list as champ (champ.name)}
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
				<span class="stat winrate" style:color={winrateColor(champ.wins / champ.games)}>
					<span class="value">
						{(champ.wins / champ.games).toLocaleString('en-us', {
							style: 'percent',
							minimumFractionDigits: 0,
							maximumFractionDigits: 0
						})}
					</span>
					<WinRateBar wins={champ.wins} games={champ.games} />
				</span>
				<span class="stat playrate">
					{champ.wins} / {champ.games - champ.wins}
				</span>
				<span class="stat kda">
					{((champ.kills + champ.assists) / champ.deaths).toLocaleString('en-us', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat cs">
					{champ.cs.toLocaleString('en-us', {
						minimumFractionDigits: 0,
						maximumFractionDigits: 0
					})}
				</span>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	.list li a,
	.sort {
		display: flex;
		align-items: center;
		justify-content: space-between;
		letter-spacing: 1px;
		text-align: center;
	}

	.list {
		li {
			font-size: 1.175rem;
			border-bottom: 1px solid var(--c3);

			&:first-child {
				border-top: 1px solid var(--c3);
			}

			@media screen and (max-width: 1200px) {
				font-size: 1rem;
			}
		}
		a {
			&:hover {
				background: var(--c2);
			}
		}

		.info {
			display: flex;
			align-items: center;
			gap: 1rem;

			@media screen and (max-width: 800px) {
				gap: 0.5rem;
			}
		}

		:global(.champ-img) {
			--size: 80;

			@media screen and (max-width: 1000px) {
				--size: 60;
			}
			@media screen and (max-width: 600px) {
				--size: 36;
			}
			@media screen and (max-width: 400px) {
				--size: 32;
			}
		}

		.name {
			width: 12rem;
			font-size: 2rem;
			text-align: left;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			@media screen and (max-width: 1200px) {
				width: 6rem;
				font-size: 1.5rem;
			}
			@media screen and (max-width: 600px) {
				font-size: 1.25rem;
			}
		}
	}

	.stat {
		flex: 1;
	}

	.sort {
		background: transparent;
		font-weight: 700;
		font-size: 0.875rem;
		text-transform: uppercase;
		user-select: none;

		> * {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
		}

		.sortable {
			cursor: pointer;
		}
	}

	.playrate {
		@media screen and (max-width: 600px) {
			display: none;
		}
	}
	.cs {
		@media screen and (max-width: 800px) {
			display: none;
		}
	}
	.kda {
		@media screen and (max-width: 600px) {
			display: none;
		}
	}
	.winrate {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 600;

		.value {
			width: 13ch;
		}
	}

	:global(.sort > * svg) {
		width: 1rem;
		height: 1rem;
	}

	.nameSort {
		justify-content: flex-start;
		width: 12rem;
		margin-left: 6rem;

		@media screen and (max-width: 1200px) {
			width: 6rem;
		}
		@media screen and (max-width: 1000px) {
			margin-left: 3rem;
		}
	}
</style>
