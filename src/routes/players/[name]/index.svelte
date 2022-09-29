<script context="module">
	export const load = ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import RelativeTime from '@yaireo/relative-time';

	import { store } from '$lib/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import WinRateBar from '$lib/components/WinRateBar.svelte';
	import FavoriteBtn from '$lib/components/FavoriteBtn.svelte';
	import ChevronRight from '$lib/components/icons/ChevronRight.svelte';
	import Select from '$lib/components/Select.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import { ordinal } from '$lib/helpers';
	import { winrateColor, msToDays } from '$lib/helpers';

	export let name;
	const perPage = 20;
	let pageIndex = 0;
	let dayFilter = 0;
	const relativeTime = new RelativeTime();

	$: matches = $store.matches || [];
	$: pagination = !dayFilter ? (pageIndex + 1) * perPage : -1;
	$: list = matches
		.filter((match) => {
			const team1 = match.teams[0].players.map((player) => ({
				...player,
				winner: match.teams[0].winner
			}));
			const team2 = match.teams[1].players.map((player) => ({
				...player,
				winner: match.teams[1].winner
			}));

			const players = [...team1, ...team2];

			const player = players.find((p) => p.name === name);
			return !player ? false : true;
		})
		.slice(0, pagination);

	$: groups = list.reduce((acc, curr) => {
		const time = new Date(curr.matchStart);
		const currTime = Date.now();
		const dayDiff = Math.trunc(msToDays(currTime - time));
		const dateRelative = relativeTime.from(time);
		const diff = dayDiff < 1 ? 'Within Last Day' : dateRelative;

		if (!acc[diff]) acc[diff] = [];
		acc[diff] = [...acc[diff], curr];

		return acc;
	}, {});

	$: aggregate = matches.reduce(
		(acc, curr) => {
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

			// Player Stats
			let playerStats = acc.stats;
			acc.stats = {
				kills: kills + (playerStats.kills ?? 0),
				deaths: deaths + (playerStats.deaths ?? 0),
				assists: assists + (playerStats.assists ?? 0),
				wins: win + (playerStats.wins ?? 0),
				games: 1 + (playerStats.games ?? 0),
				gold: gold + (playerStats.gold ?? 0),
				cs: cs + (playerStats.cs ?? 0)
			};

			// Champion stats
			let champStats = acc.champions[player.championIcon] || {
				name: player.championIcon,
				kills: 0,
				deaths: 0,
				assists: 0,
				wins: 0,
				games: 0,
				gold: 0,
				cs: 0
			};

			acc.champions[player.championIcon] = {
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
		},
		{ stats: {}, champions: {} }
	);

	$: noGamesPlayed = Object.keys(groups).length === 0;
	$: leaderboardStats = $store.leaderboard?.[name];
	$: matchlistStats = !dayFilter ? ($store.players || {})[name] : aggregate.stats;
	$: playerLP = leaderboardStats?.lp ?? 0;

	$: championStats = Object.values(aggregate.champions).sort(
		(a, b) => b.games - a.games || b.wins - a.wins
	);

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

	function setDayFilter(event) {
		dayFilter = event.detail;
	}
</script>

<svelte:head>
	<meta name="twitter:title" content={`${name} - Champions Queue`} />
	<title>{name} - Champions Queue</title>
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

{#if matchlistStats && leaderboardStats}
	<div class="statblocks">
		<div class="statblock">
			<h3 class="stat">{ordinal(leaderboardStats.rank)}</h3>
			<span class="stat-name">Rank</span>
		</div>
		<div class="statblock">
			<h3 class="stat">
				{playerLP.toLocaleString('en-us')}
			</h3>
			<span class="stat-name">LP</span>
		</div>
		<!-- {#if leaderboardStats}
			<div class="statblock">
				<h3 class="stat">{leaderboardStats.seasonPoints}</h3>
				<span class="stat-name">Season Pts</span>
			</div>
		{/if} -->
		<div class="statblock">
			<h3 class="stat" style:color={winrateColor(matchlistStats.wins / matchlistStats.games)}>
				{(matchlistStats.wins / (matchlistStats.games || 1)).toLocaleString('en-us', {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
					style: 'percent'
				})}
				<span class="subvalue">
					{matchlistStats.wins}W - {matchlistStats.games - matchlistStats.wins}L
				</span>
				<div class="winrate-bar">
					<WinRateBar wins={matchlistStats.wins} games={matchlistStats.games} height={2} />
				</div>
			</h3>
			<span class="stat-name">WR</span>
		</div>
		<div class="statblock">
			<h3 class="stat">
				{(
					(matchlistStats.kills + matchlistStats.assists) /
					(matchlistStats.deaths || 1)
				).toLocaleString('en-us', {
					minimumFractionDigits: 1,
					maximumFractionDigits: 1
				})}
			</h3>
			<span class="stat-name">KDA</span>
		</div>
	</div>
{/if}

{#if championStats}
	<div class="champ-stats">
		<h4 class="group-title">Champion Stats:</h4>
		<ol>
			{#each championStats.slice(0, 4) as champ}
				<li>
					<ChampImg name={champ.name} />
					<div>
						<p class="games">{champ.games} Games</p>
						<p class="winrate">
							{champ.wins}W - {champ.games - champ.wins}L
						</p>
					</div>
				</li>
			{/each}
			<li>
				<a href={`/players/${name}/champions`} class="link">
					View All<br />Champion stats
					<ChevronRight />
				</a>
			</li>
		</ol>
	</div>
{/if}

{#if !noGamesPlayed}
	<div class="list-groups">
		{#each Object.entries(groups) as [daysAgo, matches]}
			<div class="list-group">
				<p class="group-title lg">{daysAgo}</p>
				<ol>
					<ul class="list">
						{#each matches as match}
							<Match {match} player={name} />
						{/each}
					</ul>
				</ol>
			</div>
		{/each}
	</div>
{:else if !$store.loading}
	<div class="no-games">
		<h4>This player hasn't played any games this split 😞</h4>
	</div>
{/if}

{#if list.length >= pagination}
	<LoadMoreBtn block onclick={() => pageIndex++} />
{/if}

<style lang="scss">
	.no-games {
		display: grid;
		place-content: center;
		min-height: 80vh;
		font-size: 1.5rem;
		text-align: center;
	}

	.champ-stats {
		display: flex;
		flex-direction: column;

		ol {
			display: flex;
			flex-wrap: wrap;
			column-gap: 2rem;
			row-gap: 0.5rem;

			@media screen and (max-width: 800px) {
				column-gap: 1.25rem;
			}
		}

		li {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			line-height: 1.25;
		}
		:global(.champ-img) {
			--size: 40;

			@media screen and (max-width: 800px) {
				--size: 32;
			}
		}

		.games {
			font-weight: 900;
			white-space: nowrap;
		}
		.winrate {
			color: var(--c8);
		}

		.link {
			position: relative;
			padding-right: 2rem;
			background: var(--c2);
			padding: 0.5rem 0.75rem;
			padding-right: 2.25rem;
			font-size: 0.875rem;
			font-weight: 900;
			line-height: 1.25;
			color: var(--c8);
			transition: color var(--transition), background var(--transition);

			:global(svg) {
				position: absolute;
				width: 1rem;
				top: 50%;
				right: 0.5rem;
				transform: translate(0, -50%);
				transition: transform var(--transition);
				opacity: 0.5;
			}

			&:hover {
				color: var(--c11);
				background: var(--c3);
			}
		}
	}
</style>
