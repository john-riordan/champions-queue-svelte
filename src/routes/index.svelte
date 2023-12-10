<script context="module">
	export const prerender = true;
</script>

<script>
	import { store } from '$lib/stores';
	import { TEAMS, LOADING_STR } from '$lib/constants';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import TeamImg from '$lib/components/TeamImg.svelte';
	import Mask from '$lib/components/icons/MaskLogo.svelte';
	import GlobalSearch from '$lib/components/GlobalSearch.svelte';

	const count = 10;
	const loadingArr = [...new Array(count)].map(() => ({ name: LOADING_STR }));

	$: loading = $store.loading;

	$: topRatedPlayers = Object.values($store.leaderboard.players).length
		? Object.values($store.leaderboard.players)
				.sort((a, b) => b.lp - a.lp)
				.slice(0, count)
		: loadingArr;
	$: mostPopularChampions = $store.champions
		? Object.values($store.champions)
				.sort((a, b) => b.games - a.games)
				.slice(0, count)
		: loadingArr;
	$: mostActiveTeams = $store.teams
		? Object.values($store.teams)
				.filter((t) => TEAMS[t?.tag])
				.sort((a, b) => b.games - a.games)
				.map((t) => ({
					...t,
					...TEAMS[t.tag]
				}))
				.slice(0, count)
		: loadingArr;
	$: recentChampionCounts = $store.matches
		? $store.matches
				.filter((_, i) => i < 60)
				.reduce((acc, curr) => {
					const champs = [
						...curr.teams[0].players.map((p) => p.championIcon),
						...curr.teams[1].players.map((p) => p.championIcon)
					];
					for (const champ of champs) {
						if (!acc[champ])
							acc[champ] = {
								games: 0,
								name: champ
							};
						acc[champ].games += 1;
					}

					return acc;
				}, {})
		: loadingArr;
	$: recentPopularChampions = $store.matches
		? Object.values(recentChampionCounts)
				.sort((a, b) => b.games - a.games)
				.slice(0, count * 2)
		: [...loadingArr, ...loadingArr];
</script>

<svelte:head>
	<meta name="twitter:title" content="Champions Queue" />
	<title>Champions Queue</title>
</svelte:head>

<div class="container">
	<div class="top">
		<Mask class="mask" />
		<div class="marquee-outer" class:invis={!$store.matches}>
			<div class="marquee-inner">
				{#each [...recentPopularChampions, ...recentPopularChampions] as champion}
					<div>
						<a href={`/champions/${champion.name}`} class="item">
							<div class="img-container">
								<ChampImg name={champion.name} />
							</div>
							<div>
								<span class="name lg">{champion.name}</span>
								{#if champion.games}
									<span class="count">{champion.games} games</span>
								{/if}
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
		<div>
			<h1>Champions Queue</h1>
			<div class="split-details">
				<span>Season 2024</span>
			</div>
		</div>
	</div>

	<GlobalSearch />

	<div class="blocks">
		<div class="block" class:loading>
			<h2 class="ss">
				<a href="/players">Highest Rated Players</a>
			</h2>
			<ol>
				{#each topRatedPlayers as player}
					<li>
						<a href={`/players/${player.name}`} class="item">
							<div class="left">
								<PlayerImg name={player.name} />
								<span class="name lg">{player.name}</span>
							</div>
							<span class="value lg">{player.lp ?? '   '}</span>
						</a>
					</li>
				{/each}
				<li>
					<a href="/champions" class="item more lg">View More</a>
				</li>
			</ol>
		</div>
		<div class="block" class:loading>
			<h2 class="ss">
				<a href="/champions">Most Played Champions</a>
			</h2>
			<ol>
				{#each mostPopularChampions as champion}
					<li>
						<a href={`/champions/${champion.name}`} class="item">
							<div class="left">
								<ChampImg name={champion.name} />
								<span class="name lg">{champion.name}</span>
							</div>
							<span class="value lg">{champion.games ?? '   '}</span>
						</a>
					</li>
				{/each}
				<li>
					<a href="/champions" class="item more lg">View More</a>
				</li>
			</ol>
		</div>
		<div class="block" class:loading>
			<h2 class="ss">
				<a href="/teams">Most Active Teams</a>
			</h2>
			<ol>
				{#each mostActiveTeams as team}
					<li>
						<a href={`/teams/${team.name}`} class="item">
							<div class="left">
								<TeamImg name={team.name} />
								<span class="name lg">{team.name}</span>
							</div>
							<span class="value lg">{team.games ?? '   '}</span>
						</a>
					</li>
				{/each}
				<li>
					<a href="/teams" class="item more lg">View More</a>
				</li>
			</ol>
		</div>
		{#if loading}
			<div class="loading-indicator" />
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		place-content: center;
		gap: 3.5rem;

		> * {
			position: relative;
		}

		:global(.search-container) {
			min-width: 30rem;

			@media screen and (max-width: 800px) {
				min-width: unset;
				width: 100%;
			}
		}

		@media screen and (max-width: 600px) {
			gap: 1rem;

			/* :global(.search-container) {
				display: none;
			} */
		}

		:global(input[type='text']) {
			background: var(--c3);
			border: 2px solid var(--c5);

			&::placeholder {
				color: var(--c6);
				text-transform: none;
			}
		}
	}

	.top {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 2rem 0 6rem 0;
		width: 100%;
		background: url('/flag-black.webp') no-repeat;
		background-size: cover;
		background-position: center 50%;
		overflow: hidden;

		> * {
			position: relative;
		}

		h1 {
			font-size: 8rem;
			text-align: center;
			padding-top: 0.375em;

			@media screen and (max-width: 1400px) {
				font-size: 6.5rem;
			}
			@media screen and (max-width: 1000px) {
				font-size: 5.5rem;
			}
			@media screen and (max-width: 600px) {
				font-size: 4rem;
			}
		}

		img,
		:global(.mask) {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0.5;
			mix-blend-mode: overlay;
			pointer-events: none;
		}
		:global(.mask) {
			width: 600px;
			max-width: 100%;
			height: auto;
		}

		@media screen and (max-width: 600px), screen and (max-height: 800px) {
			margin-top: 0;
			padding: 3rem 0;
		}
	}

	.logo {
		--width: 24rem;
		margin: 0 auto;
		width: var(--width);
		max-width: var(--width);
		position: relative;

		@media screen and (max-width: 1200px), screen and (max-height: 800px) {
			--width: 16rem;
		}
		@media screen and (max-width: 600px) {
			--width: 13rem;
		}

		svg {
			height: auto;
			width: 100%;
			max-width: 100%;
		}
		.mask {
			fill: var(--logo);
		}
		.wordmark {
			width: 100%;
			max-width: 100%;
			filter: drop-shadow(0px 0px 10px var(--c1));
		}
	}

	@keyframes marquee {
		to {
			transform: translateX(-50%);
		}
	}
	.marquee-outer {
		--height: 36;
		position: relative;
		height: calc(var(--height) * 1px);
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 1%,
			black 5%,
			black 95%,
			transparent 99%
		);

		@media screen and (max-width: 1000px) {
			--height: 32;
		}

		.marquee-inner {
			position: absolute;
			display: flex;
			gap: 1rem;
			flex-wrap: nowrap;
			top: 0;
			left: 0;
			animation: marquee 145s linear infinite;
		}

		a {
			position: relative;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding-right: 1.5rem;
			height: calc(var(--height) * 1px);

			&:hover {
				.img-container::before {
					box-shadow: inset 0 0 0 2px var(--c11);
				}
			}

			.img-container {
				position: relative;

				&::before {
					content: '';
					position: absolute;
					inset: 0;
					transition: box-shadow var(--transition);
					z-index: 1;
				}
			}

			span {
				display: block;
			}

			.name {
				font-size: 1.25rem;
				letter-spacing: 2px;
				line-height: 1;
				padding-top: 0.25rem;
				white-space: nowrap;
			}
			.count {
				white-space: nowrap;
				color: var(--c11);
				opacity: 0.65;
				font-size: 0.75rem;
				text-transform: uppercase;
			}
		}

		:global(.champ-img) {
			--size: var(--height);
			max-width: unset;
		}
	}

	.blocks {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 2.5rem;

		@media screen and (max-width: 1200px) {
			gap: 1rem;
		}
		@media screen and (max-width: 800px) {
			grid-template-columns: 1fr;
			width: 100%;
		}
		@media screen and (max-width: 600px) {
			gap: 2rem;

			padding: 1rem;
		}

		h2 {
			font-size: 1rem;
			line-height: 1;
			margin-bottom: 0.5rem;
			font-weight: 700;
			letter-spacing: 1px;

			@media screen and (max-width: 1200px) {
				font-size: 1rem;
			}
			@media screen and (max-width: 600px) {
				margin-bottom: 0.75rem;
			}

			a {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				color: var(--yellow);

				&:hover {
					text-decoration: underline;
				}
			}

			.chevron {
				color: var(--c8);
			}
		}
		.block {
			&.loading {
				opacity: 0.2;
			}
		}
		ol {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			:global(.champ-img),
			:global(.player-img),
			:global(.team-img) {
				--size: 48;
			}
		}
		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.75rem;
			padding-right: 1.5rem;
			background: var(--c2);

			&:hover {
				background: var(--c3);
			}

			.left {
				display: flex;
				align-items: center;
				gap: 0.75rem;
			}

			&.more {
				display: block;
				background: transparent;
				padding: 0;
				text-align: center;
				padding-block: 0.5rem;
				color: var(--c7);
				font-size: 1.25em;
				transition: color var(--transition);

				&:hover {
					color: var(--c9);
				}
			}
		}
		.name,
		.value {
			font-size: 1.5rem;

			@media screen and (min-width: 1800px) {
				font-size: 2rem;
			}
		}
		.name {
			width: 16ch;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;

			@media screen and (min-width: 1600px) {
				font-size: 2rem;
				width: 20ch;
			}
		}
		.value {
			color: var(--c7);
			text-align: right;
			width: 4ch;
		}
	}

	.split-details {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.25rem;
		text-transform: uppercase;
		letter-spacing: 6px;
		color: var(--c10);
		text-align: center;

		@media screen and (max-width: 600px) {
			gap: 0.25rem;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			font-size: 0.75rem;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.05;
		}
	}

	.team-logo {
		position: absolute;
		opacity: 0;
		pointer-events: none;
		animation: fadeIn 1.5s calc(var(--delay) * 5s) ease-in forwards 1;

		@media screen and (max-width: 1000px) {
			transform: scale(0.35) !important;
		}

		&.TL {
			top: -15%;
			left: 0%;
			transform: rotate(7deg) scale(0.85);
		}
		&.EG {
			top: -10%;
			left: 40%;
			transform: rotate(-5deg) scale(0.7);
		}
		&.C9 {
			top: -10%;
			right: -5%;
			transform: rotate(12deg) scale(1);
		}
		&.CLG {
			top: 30%;
			left: 15%;
			transform: rotate(5deg) scale(0.7);
		}
		&.GG {
			top: 30%;
			right: 15%;
			transform: rotate(7deg) scale(0.7);
		}
		&.FLY {
			top: 30%;
			right: -10%;
			transform: rotate(-3deg) scale(0.8);
		}
		&.TSM {
			top: 60%;
			left: -5%;
			transform: rotate(-3deg) scale(0.7);
		}
		&.T100 {
			bottom: 0%;
			left: 40%;
		}
		&.DIG {
			top: 62%;
			right: 0%;
			transform: rotate(15deg) scale(0.8);
		}
		&.IMT {
			top: 15%;
			left: -9%;
			transform: rotate(-12deg) scale(0.7);
		}
	}
</style>
