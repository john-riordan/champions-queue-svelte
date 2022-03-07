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
		padding: var(--gap);
		z-index: 1;
	}

	.top {
		display: flex;
		flex-direction: column;

		.logo {
			margin: 1rem auto 2rem;
		}

		a {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 0.25rem;
			padding: 1rem;
			color: var(--c9);

			&:hover {
				background: var(--c2);
			}
			&.active {
				background: var(--c2);
				color: var(--c11);
				box-shadow: inset 0 0 0 1px var(--c4);
			}
		}
	}

	.top :global(svg) {
		width: 1.25rem;
		height: 1.25rem;
	}

	.content {
		position: relative;
		box-sizing: border-box;
		padding: var(--gap);
		padding-left: calc(var(--nav-width) + var(--gap));
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
		inset: 0 0 0 calc(var(--nav-width) + var(--gap));
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
