<script context="module">
	export const load = async ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import { store, pageBackground } from '$lib/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import FavoriteBtn from '$lib/components/FavoriteBtn.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import Select from '$lib/components/Select.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';
	import { winrateColor, msToDays } from '$lib/helpers';

	export let name;
	let sort = 'games';
	let desc = true;
	let dayFilter = 0;

	$: champions = ($store.matches || []).reduce((acc, curr) => {
		const time = new Date(curr.matchStart);
		const currTime = Date.now();
		const dayDiff = Math.trunc(msToDays(currTime - time));

		if (dayFilter && dayDiff > dayFilter - 1) return acc;

		const team1 = curr.teams[0].players.map((player) => ({
			...player,
			winner: curr.teams[0].winner
		}));
		const team2 = curr.teams[1].players.map((player) => ({
			...player,
			winner: curr.teams[1].winner
		}));
		const players = [...team1, ...team2];

		const player = players.find((p) => p.name === name);
		if (!player) return acc;

		const { kills, deaths, assists, gold, cs } = player;
		const win = player.winner ? 1 : 0;

		let champStats = acc[player.championIcon] || {
			name: player.championIcon,
			kills: 0,
			deaths: 0,
			assists: 0,
			wins: 0,
			games: 0,
			gold: 0,
			cs: 0,
			lp: 0
		};

		acc[player.championIcon] = {
			name: player.championIcon,
			kills: kills + champStats.kills,
			deaths: deaths + champStats.deaths,
			assists: assists + champStats.assists,
			wins: win + champStats.wins,
			games: 1 + champStats.games,
			gold: gold + champStats.gold,
			cs: cs + champStats.cs
		};

		return acc;
	}, {});

	$: totalGames = Object.values(champions).reduce((acc, curr) => {
		return acc + curr.games;
	}, 0);

	$: list = Object.values(champions)
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

	function setDayFilter(event) {
		dayFilter = event.detail;
	}

	const dayFilterOptions = [
		{
			value: 0,
			text: 'Filter: Full Split'
		},
		{
			value: 1,
			text: 'Filter: Within Last Day'
		},
		{
			value: 3,
			text: 'Filter: Within Last 3 Days'
		},
		{
			value: 7,
			text: 'Filter: Within Last 7 Days'
		},
		{
			value: 14,
			text: 'Filter: Within Last 2 Weeks'
		}
	];
</script>

<svelte:head>
	<meta name="twitter:title" content={`${name}- ChampionsQueue.gg`} />
	<title>{name} Champion Stats- ChampionsQueue.gg</title>
</svelte:head>

<PageHeader title={name} player={name}>
	<div slot="controls">
		<FavoriteBtn />
	</div>
</PageHeader>

<div class="controls">
	<Select
		defaultText="Filter by:"
		value={dayFilter}
		options={dayFilterOptions}
		on:select={setDayFilter}
	/>
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
	<span class="stat sortable" on:click={() => setSort('kda')}>
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
				<span class="stat winrate" style:color={winrateColor(champ.wins / champ.games)}>
					{(champ.wins / champ.games).toLocaleString('en-us', {
						style: 'percent',
						minimumFractionDigits: 0,
						maximumFractionDigits: 0
					})}
				</span>
				<span class="stat playrate">
					{champ.wins} / {champ.games - champ.wins}
				</span>
				<span class="stat">
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
		background: var(--c2);
		transition: background ease 0.15s;

		@media screen and (max-width: 800px) {
			padding: 0.5rem;
		}
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
				background: var(--c3);
			}
			.winrate {
				font-weight: 600;
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
				--size: 40;
			}
			@media screen and (max-width: 800px) {
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

	:global(.sort > * svg) {
		width: 1rem;
		height: 1rem;
	}

	.nameSort {
		justify-content: flex-start;
		width: 12rem;
		margin-left: 4.5rem;

		@media screen and (max-width: 1200px) {
			width: 6rem;
		}
		@media screen and (max-width: 1000px) {
			margin-left: 3rem;
		}
	}
</style>
