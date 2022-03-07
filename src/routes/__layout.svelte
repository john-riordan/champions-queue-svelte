<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { store, pageBackground } from '$lib/stores';
	import { fetchData } from '$lib/helpers';
	import Players from '$lib/components/icons/Players.svelte';
	import Champions from '$lib/components/icons/Champions.svelte';
	import Matches from '$lib/components/icons/Matches.svelte';
	import Leaderboard from '$lib/components/icons/Leaderboard.svelte';
	import Refresh from '$lib/components/icons/Refresh.svelte';
	import MatchModal from '$lib/components/MatchModal.svelte';
	import '../app.css';

	onMount(async () => {
		const mountedData = await fetchData();
		store.set(mountedData);
	});

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
						<svelte:component this={route.icon} />
						{route.title}
					</a>
				{/each}
			</nav>
		</div>

		<div class="bottom">
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
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		width: var(--nav-width);
		padding: 2.5rem;
		padding-right: 0;
		z-index: 1;
	}

	.top {
		display: flex;
		flex-direction: column;

		.logo {
			margin: 0 1rem 2rem;
		}

		a {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			padding: 1rem;
			font-size: 1.25rem;
			opacity: 0.35;
			transition: opacity 0.15s ease, transform 0.15s ease;

			&:hover {
				opacity: 0.75;
				transform: translateX(3%);
			}
			&.active {
				opacity: 1;
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
		padding-right: 1rem;
		padding-top: 2rem;
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
