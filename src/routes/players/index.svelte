<script context="module">
	export const load = async () => {
		return { props: { title: 'Players' } };
	};
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import CheckChecked from '$lib/components/icons/CheckChecked.svelte';
	import CheckUnchecked from '$lib/components/icons/CheckUnchecked.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import Select from '$lib/components/Select.svelte';
	import RankBadge from '$lib/components/RankBadge.svelte';
	import { store } from '$lib/stores';
	import { TEAMS, teamImg } from '$lib/constants';
	import { winrateColor } from '$lib/helpers';

	export let title;
	let search = '';
	let team = null;
	let sort = 'lp';
	let desc = true;
	let commonOnly = false;

	$: players = Object.values($store.players || {})
		.sort((a, b) => b.lp - a.lp || b.wins / b.games - a.wins / a.games || b.wins - a.wins)
		.map((p, i) => ({ ...p, rank: i + 1 }));
	$: leaderboard = $store.leaderboard || {};
	$: totalGames = $store.totalGames || 1;
	$: list = players
		.filter((p) => {
			if (team) {
				return p.name.toLowerCase().startsWith(team.toLowerCase());
			}
			return p.name.toLowerCase().includes(search.toLowerCase());
		})
		.map((p) => {
			const lp = leaderboard[p.name]?.lp || 0;
			const rank = leaderboard[p.name]?.rank;
			return {
				...p,
				lp,
				rank,
				winrate: p.wins / p.games,
				kda: (p.kills + p.assists) / (p.deaths || 1)
			};
		})
		.sort((a, b) => (desc ? b[sort] - a[sort] : a[sort] - b[sort]))
		.filter((c) => (commonOnly ? c.games / totalGames > 0.02 : true));

	function setSort(col) {
		if (sort !== col) sort = col;
		else desc = !desc;
	}

	function setTeam(event) {
		team = event.detail;
		search = '';
	}

	const teamOptions = Object.values(TEAMS).map((t) => ({
		value: t.tag,
		text: t.name,
		image: teamImg(70, t.logo)
	}));
</script>

<svelte:head>
	<meta name="twitter:title" content={`Players- ChampionsQueue.gg`} />
	<title>Players- ChampionsQueue.gg</title>
</svelte:head>

<PageHeader {title}>
	<!-- <div slot="controls">
		<RefreshBtn />
	</div> -->
</PageHeader>

<div class="controls">
	<input
		type="text"
		class="search"
		class:disabled={team}
		placeholder="Search Players"
		bind:value={search}
	/>
	<label class="boolean-btn" class:checked={commonOnly} for="hide-low">
		<span>Hide Low Game-Count</span>
		<input type="checkbox" bind:checked={commonOnly} id="hide-low" />
		{#if commonOnly}
			<CheckChecked />
		{:else}
			<CheckUnchecked />
		{/if}
	</label>
	<Select defaultText="Select an LCS Team" value={team} options={teamOptions} on:select={setTeam} />
</div>

<div class="sort">
	<span class="nameSort">Name</span>
	<span class="stat rank" on:click={() => setSort('rank')}>
		Rank
		{#if sort === 'rank'}
			<SortDirection class={desc ? 'asc' : 'desc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('lp')}>
		LP
		{#if sort === 'lp'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat kda" on:click={() => setSort('kda')}>
		KDA
		{#if sort === 'kda'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('winrate')}>
		WR
		{#if sort === 'winrate'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('games')}>
		WL (Total)
		{#if sort === 'games'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
</div>

<ul class="list">
	{#each list as player}
		<li>
			<a href={`/players/${player.name}`}>
				<div class="info">
					<PlayerImg name={player.name} />
					<p class="name">{player.name}</p>
				</div>

				<span class="stat rank">
					<RankBadge rank={player.rank} />
				</span>
				<span class="stat">
					{leaderboard[player.name]?.lp || 0}
				</span>
				<span class="stat kda">
					{((player.kills + player.assists) / (player.deaths || 1)).toLocaleString('en-us', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat winrate" style:color={winrateColor(player.wins / player.games)}>
					{(player.wins / player.games).toLocaleString('en-us', {
						style: 'percent',
						minimumFractionDigits: 0,
						maximumFractionDigits: 0
					})}
				</span>
				<span class="stat">
					{player.wins} / {player.games - player.wins} ({player.games})
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
		padding: 1rem;
		letter-spacing: 1px;
		text-align: center;
		background: var(--c2);

		@media screen and (max-width: 1200px) {
			padding: 0.75rem;
		}
	}

	.list {
		li {
			font-size: 1.175rem;

			@media screen and (max-width: 1200px) {
				font-size: 1rem;
			}

			a {
				border-top: 2px solid var(--app-bg);
				border-bottom: 2px solid var(--app-bg);

				&:hover {
					background: var(--c3);
				}
			}

			.info {
				display: flex;
				align-items: center;
				gap: 1rem;
			}

			:global(.player-img) {
				--size: 56;

				@media screen and (max-width: 1000px) {
					--size: 40;
				}
				@media screen and (max-width: 800px) {
					display: none;
				}
			}

			.name {
				width: 15rem;
				font-weight: 700;
				text-align: left;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

				@media screen and (max-width: 1200px) {
					width: 6rem;
				}
			}
			.winrate {
				font-weight: 600;
			}
		}
	}

	.stat {
		flex: 1;
	}

	.kda,
	.rank {
		@media screen and (max-width: 800px) {
			display: none !important;
		}
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
		margin-left: 5.5rem;

		@media screen and (max-width: 1200px) {
			width: 6rem;
		}
		@media screen and (max-width: 1000px) {
			margin-left: 3rem;
		}
		@media screen and (max-width: 800px) {
			margin-left: 0;
		}
	}
</style>
