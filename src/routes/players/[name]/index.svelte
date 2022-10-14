<script context="module">
	export const load = ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import RelativeTime from '@yaireo/relative-time';
	import { Confetti } from 'svelte-confetti';

	import { store } from '$lib/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import WinRateBar from '$lib/components/WinRateBar.svelte';
	import FavoriteBtn from '$lib/components/FavoriteBtn.svelte';
	import Select from '$lib/components/Select.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import { ordinal } from '$lib/helpers';
	import { winrateColor, msToDays } from '$lib/helpers';
	import { CORRECT_CHAMPION_DISPLAY_NAMES, caedrelMemeMin, caedrelMemeMax } from '$lib/constants';

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
				name: CORRECT_CHAMPION_DISPLAY_NAMES[player.championIcon] || player.championIcon,
				kills: 0,
				deaths: 0,
				assists: 0,
				wins: 0,
				games: 0,
				gold: 0,
				cs: 0
			};

			acc.champions[player.championIcon] = {
				name: CORRECT_CHAMPION_DISPLAY_NAMES[player.championIcon] || player.championIcon,
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

	$: maxPlace = Object.keys($store.leaderboard || {})?.length
		? Object.keys($store.leaderboard)?.length
		: 0;

	$: championStats = Object.values(aggregate.champions).sort(
		(a, b) => b.games - a.games || b.wins - a.wins
	);

	$: winrate = matchlistStats?.wins / (matchlistStats?.games || 1);

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

	$: caedrelMeme =
		name === 'Caedrel' && winrate < caedrelMemeMin
			? 'Caedrel Clown'
			: name === 'Caedrel' && winrate >= caedrelMemeMax
			? 'Caedrel Chad'
			: name;
</script>

<svelte:head>
	<meta name="twitter:title" content={`${name} - Champions Queue`} />
	<title>{name} - Champions Queue</title>
</svelte:head>

<PageHeader title={name} player={caedrelMeme}>
	<div slot="controls">
		<FavoriteBtn />
	</div>
</PageHeader>

{#if name === 'Caedrel'}
	<p class="caedrel-alert">
		🚨🚨 This very special profile will update based on win-rate (less than <span
			>{(caedrelMemeMin * 100).toFixed(0)}%</span
		>
		and greater than <span>{(caedrelMemeMax * 100).toFixed(0)}%)</span> 🚨🚨
	</p>
	{#if winrate >= caedrelMemeMax}
		<div class="confetti">
			<Confetti
				x={[-5, 5]}
				y={[0, 0.1]}
				delay={[500, 2000]}
				infinite
				duration="5000"
				amount="200"
				fallDistance="100vh"
			/>
		</div>
	{:else if winrate < caedrelMemeMin}
		<div class="confetti">
			<Confetti
				x={[-5, 5]}
				y={[0, 0.1]}
				colorRange={[194, 232]}
				delay={[500, 2000]}
				size={5}
				infinite
				duration="2500"
				amount="200"
				rounded="true"
				fallDistance="200vh"
			/>
		</div>
	{/if}
{/if}

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
			<h3 class="stat">
				{ordinal(leaderboardStats.rank)}
				{#if maxPlace}
					<span class="subvalue">
						/ {maxPlace}
					</span>
				{/if}
			</h3>
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
				{winrate.toLocaleString('en-us', {
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
		{#if caedrelMeme === 'Caedrel Clown'}
			<div class="statblock">
				<img
					src="https://cdn.7tv.app/emote/603cac391cd55c0014d989be/4x.webp"
					width="60"
					height="46"
					alt="sadge"
				/>
			</div>
		{:else if caedrelMeme === 'Caedrel Chad'}
			<div class="statblock">
				<img
					src="https://cdn.7tv.app/emote/603eaaa9115b55000d7282d8/4x.webp"
					width="48"
					height="48"
					alt="pog"
				/>
			</div>
		{:else if caedrelMeme === 'Caedrel'}
			<div class="statblock">
				<img
					src="https://cdn.7tv.app/emote/61d099df08bb84e20d5e331a/4x.webp"
					width="60"
					height="60"
					alt="peepolove"
				/>
			</div>
		{/if}
	</div>
{/if}

{#if championStats}
	<div class="champ-stats">
		<h4 class="group-title">Champion Stats:</h4>
		<ol>
			{#each championStats.slice(0, 6) as champ}
				<li>
					<ChampImg name={champ.name} />
					<div>
						<h5 class="name">{champ.name}</h5>
						<p class="winrate">
							{champ.wins}W - {champ.games - champ.wins}L
						</p>
					</div>
				</li>
			{/each}
			<li>
				<a href={`/players/${name}/champions`} class="link lg">View All</a>
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
			row-gap: 0.75rem;

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
			--size: 60;

			@media screen and (max-width: 1200px) {
				--size: 48;
			}
			@media screen and (max-width: 800px) {
				--size: 32;
			}
		}

		.name {
			font-size: 1.5rem;
			white-space: nowrap;

			@media screen and (max-width: 1200px) {
				font-size: 1.25rem;
			}
			@media screen and (max-width: 800px) {
				font-size: 1rem;
			}
		}
		.winrate {
			color: var(--c8);
		}

		.link {
			position: relative;
			padding: 0.5rem 0.75rem;
			padding-right: 2.25rem;
			font-size: 2rem;
			line-height: 1.25;
			color: var(--c8);
			transition: color var(--transition), background var(--transition);

			@media screen and (max-width: 1200px) {
				font-size: 1.5rem;
			}
			@media screen and (max-width: 800px) {
				font-size: 1.25rem;
			}

			&:hover {
				color: var(--c11);
			}
		}
	}

	.caedrel-alert {
		color: var(--c8);

		span {
			text-decoration: underline;
			color: var(--c10);
			font-weight: 600;
		}
	}
	.confetti {
		position: fixed;
		top: -50px;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
	}
</style>
