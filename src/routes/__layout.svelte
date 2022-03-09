<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { store, pageBackground } from '$lib/stores';
	import { fetchData, msToHours } from '$lib/helpers';
	import Players from '$lib/components/icons/Players.svelte';
	import Champions from '$lib/components/icons/Champions.svelte';
	import Matches from '$lib/components/icons/Matches.svelte';
	import Leaderboard from '$lib/components/icons/Leaderboard.svelte';
	import Refresh from '$lib/components/icons/Refresh.svelte';
	import MatchModal from '$lib/components/MatchModal.svelte';
	import '../app.css';

	let splittimeLeft;
	let end = 0;
	let currTime = Date.now();

	onMount(async () => {
		const mountedData = await fetchData();
		store.set(mountedData);

		const interval = setInterval(() => {
			currTime = Date.now();
		}, 1000);

		if ($store.splitEnd) {
			end = new Date($store.splitEnd).getTime();
			splittimeLeft = msToMins(end - currTime);
		}

		return () => {
			clearInterval(interval);
		};
	});

	$: timeLeft = msToHours(end - currTime);
	$: currURL = $page.url.pathname;
	const routes = [
		{
			url: '/players',
			title: 'Players',
			icon: Players
		},
		{
			url: '/champions',
			title: 'Champions',
			icon: Champions
		},
		{
			url: '/matches',
			title: 'Matches',
			icon: Matches
		},
		{
			url: '/leaderboard',
			title: 'Leaderboard',
			icon: Leaderboard
		}
	];
</script>

{#if $pageBackground}
	<img src={$pageBackground} class="background" loading="lazy" alt="background" />
{/if}
<div class="container">
	<div class="nav">
		<div class="top">
			<img class="logo" src="/logo.webp" width="124" alt="Champions Queue Logo" />
			<nav>
				{#each routes as route}
					<a href={route.url} class:active={currURL.includes(route.url)}>
						<div>
							<svelte:component this={route.icon} />
							{route.title}
						</div>
					</a>
				{/each}
			</nav>
		</div>

		<div class="bottom">
			<p>Split Ends In: {timeLeft}</p>
			<p>Favorites go here</p>
		</div>
	</div>
	<section class="content">
		<slot />
		{#if $store.loading}
			<div class="loading">
				<Refresh />
			</div>
		{/if}
	</section>
</div>
<MatchModal />

<style lang="scss">
	.nav {
		box-sizing: border-box;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		width: var(--nav-width);
		/* padding: 2.5rem; */
		padding-right: 0;
		z-index: 1;
	}

	.top {
		display: flex;
		flex-direction: column;

		.logo {
			margin: 4rem;
			margin-bottom: 3rem;
		}

		a {
			--transition: 0.25s ease-out;
			position: relative;
			display: flex;
			align-items: center;
			padding: 1rem 0 1rem 3rem;
			text-transform: uppercase;
			font-weight: 600;
			letter-spacing: 1px;
			transition: box-shadow var(--transition);

			> div {
				position: relative;
				display: flex;
				align-items: center;
				gap: 0.75rem;
				opacity: 0.35;
				transition: opacity var(--transition), transform var(--transition);
			}

			&::before,
			&::after {
				content: '';
				position: absolute;
				inset: 0;
				opacity: 0;
				transition: opacity var(--transition);
			}
			&::before {
				background: linear-gradient(
					to right,
					hsla(var(--logo-hsl) / 0.2),
					hsla(var(--logo-hsl) / 0.05) 50%,
					transparent 95%
				);
			}
			&::after {
				width: 75%;
				box-shadow: inset 0 1px 0 0 hsla(var(--logo-hsl) / 0.75),
					inset 0 -1px 0 0 hsla(var(--logo-hsl) / 0.75);
				pointer-events: none;
				-webkit-mask-image: linear-gradient(to right, black, transparent);
			}

			&:hover {
				> div {
					opacity: 0.75;
					transform: translateX(5%);
				}
			}
			&.active {
				box-shadow: inset 0.25rem 0 0 0 var(--logo);

				> div {
					opacity: 1;
					transform: translateX(5%);
				}

				&::before {
					opacity: 1;
				}
				&::after {
					opacity: 0.75;
				}
			}
		}
	}

	.top :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
	}

	.content {
		position: relative;
		box-sizing: border-box;
		padding: var(--gap);
		padding-left: var(--nav-width);
		padding-right: 3rem;
		padding-top: 3rem;
	}

	.nav > .active {
		background: var(--c3);
		border-color: var(--c4);
	}

	@keyframes spin {
		to {
			transform: rotate(1turn);
		}
	}

	.loading {
		position: fixed;
		inset: 0 0 0 var(--nav-width);
		display: grid;
		place-content: center;
		background-color: var(--c1);
		opacity: 0.75;

		:global(svg) {
			width: 4rem;
			height: 4rem;
			animation: spin 1s linear forwards infinite;
		}
	}
	.background {
		position: absolute;
		top: -10%;
		left: calc(var(--nav-width) - 2rem);
		width: 500px;
		height: auto;
		opacity: 0.05;
		filter: saturate(0);
	}
</style>
