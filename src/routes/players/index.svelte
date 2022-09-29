<script context="module">
	export const load = async () => {
		return { props: { title: 'Players' } };
	};
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import WinRateBar from '$lib/components/WinRateBar.svelte';
	import CheckChecked from '$lib/components/icons/CheckChecked.svelte';
	import CheckUnchecked from '$lib/components/icons/CheckUnchecked.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import TeamImg from '$lib/components/TeamImg.svelte';
	import Select from '$lib/components/Select.svelte';
	import RankBadge from '$lib/components/RankBadge.svelte';
	import { store } from '$lib/stores';
	import { TEAMS, TEAMS_WORLDS, teamImg } from '$lib/constants';
	import { winrateColor, findPlayerTeam } from '$lib/helpers';

	export let title;
	let search = '';
	let team = null;
	let sort = 'lp';
	let desc = true;
	let worldsOnly = false;

	$: players = Object.values($store.players || {})
		.sort((a, b) => b.lp - a.lp || b.wins / b.games - a.wins / a.games || b.wins - a.wins)
		.map((p, i) => ({ ...p, rank: i + 1 }));
	$: leaderboard = $store.leaderboard || {};
	$: list = players
		.filter((p) => {
			const playerTeam = findPlayerTeam(p.name);
			const worldsTeam = worldsOnly ? TEAMS_WORLDS[playerTeam?.tag] : true;
			const teamFilterMatch = team ? p.name.toLowerCase().startsWith(team.toLowerCase()) : true;
			const searchMatch = search?.length
				? p.name.toLowerCase().includes(search.toLowerCase())
				: true;

			return worldsTeam && teamFilterMatch && searchMatch;
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
		.sort((a, b) => (desc ? b[sort] - a[sort] : a[sort] - b[sort]));

	function setSort(col) {
		if (sort !== col) sort = col;
		else desc = !desc;
	}

	function setTeam(event) {
		team = event.detail;
		search = '';
	}

	$: console.log($store.leaderboardMaxLP, $store.leaderboardMinLP);

	const teamOptions = Object.values(TEAMS).map((t) => ({
		value: t.tag,
		text: t.name,
		image: teamImg(70, t.logo)
	}));
</script>

<svelte:head>
	<meta name="twitter:title" content={`Players - Champions Queue`} />
	<title>Players- ChampionsQueue.gg</title>
</svelte:head>

<PageHeader {title} center>
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
	<label class="boolean-btn" class:checked={worldsOnly} for="worlds-only">
		<span>Only Worlds Teams</span>
		<input type="checkbox" bind:checked={worldsOnly} id="worlds-only" />
		{#if worldsOnly}
			<CheckChecked />
		{:else}
			<CheckUnchecked />
		{/if}
	</label>
	<Select defaultText="Select a Team" value={team} options={teamOptions} on:select={setTeam} />
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
	<span class="stat winrate" on:click={() => setSort('winrate')}>
		WR
		{#if sort === 'winrate'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat wl" on:click={() => setSort('games')}>
		WL (Total)
		{#if sort === 'games'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
</div>

<ul class="list">
	{#each list as player (player.name)}
		{@const playerTeam = findPlayerTeam(player.name)}
		<li>
			<a href={`/players/${player.name}`}>
				<div class="info">
					<PlayerImg name={player.name} />
					{#if playerTeam}
						<TeamImg name={playerTeam?.name} />
					{:else}
						<div class="no-team" />
					{/if}

					<p class="name lg">{player.name}</p>
				</div>

				<span class="stat rank">
					<RankBadge rank={player.rank} />
				</span>
				<span class="stat lp lg">
					<span>{leaderboard[player.name]?.lp || 0}</span>
					<WinRateBar
						height={2}
						wins={player.lp - $store.leaderboardMinLP}
						games={$store.leaderboardMaxLP - $store.leaderboardMinLP}
					/>
				</span>
				<span class="stat kda">
					{((player.kills + player.assists) / (player.deaths || 1)).toLocaleString('en-us', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat winrate" style:color={winrateColor(player.wins / player.games)}>
					<span class="value">
						{(player.wins / player.games).toLocaleString('en-us', {
							style: 'percent',
							minimumFractionDigits: 0,
							maximumFractionDigits: 0
						})}
					</span>
					<WinRateBar wins={player.wins} games={player.games} />
				</span>
				<span class="stat wl">
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

			a {
				&:hover {
					background: var(--c2);
				}
			}

			.info {
				display: flex;
				align-items: center;
				gap: 0.75rem;
			}

			:global(.player-img) {
				--size: 80;

				@media screen and (max-width: 1000px) {
					--size: 48;
				}
				@media screen and (max-width: 800px) {
					display: none;
				}
			}

			.no-team,
			:global(.team-img) {
				--size: 32;

				@media screen and (min-width: 1700px) {
					--size: 48;
				}
			}
			.no-team {
				width: calc(var(--size) * 1px);
			}

			.name {
				width: 14rem;
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
	}

	.sort {
		background: transparent;
		font-weight: 700;
		font-size: 0.875rem;
		text-transform: uppercase;
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
		margin-left: 8.5rem;

		@media screen and (min-width: 1700px) {
			margin-left: 9.5rem;
		}
		@media screen and (max-width: 1200px) {
			width: 6.5rem;
		}
		@media screen and (max-width: 1000px) {
			margin-left: 6rem;
		}
		@media screen and (max-width: 800px) {
			margin-left: 2rem;
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
	.lp {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 2.5rem;

		@media screen and (max-width: 600px) {
			font-size: 1.5rem;
		}

		:global(.bar) {
			width: 4ch;
			opacity: 0.25;
		}
	}
	.winrate {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 600;

		@media screen and (max-width: 600px) {
			gap: 0;
		}

		.value {
			width: 13ch;
		}
	}
	.wl {
		@media screen and (max-width: 600px) {
			display: none;
		}
	}
</style>
