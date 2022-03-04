<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { store, pageBackground } from '$lib/stores';
	import Players from '$lib/components/icons/Players.svelte';
	import Champions from '$lib/components/icons/Champions.svelte';
	import Matches from '$lib/components/icons/Matches.svelte';
	import Leaderboard from '$lib/components/icons/Leaderboard.svelte';
	import Refresh from '$lib/components/icons/Refresh.svelte';
	import MatchModal from '$lib/components/MatchModal.svelte';
	import '../app.css';

	async function fetchData() {
		const res = await fetch('/api');
		const json = await res.json();

		return json;
	}

	let data;

	onMount(async () => {
		data = await fetchData();
		store.set(data);
	});

	async function fetchNewData() {
		store.set({ ...data, loading: true });
		const newData = await fetchData();
		store.set({ ...newData, loading: false });
	}

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
	<nav class="nav">
		{#each routes as route}
			<a href={route.url} class:active={currURL.includes(route.url)}>
				<svelte:component this={route.icon} />
				{route.title}
			</a>
		{/each}
		<button on:click={fetchNewData}>
			<Refresh />
			Refresh Data
		</button>
	</nav>
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
		height: 100vh;
		width: var(--nav-width);
		padding: var(--gap);
		z-index: 1;
	}

	.nav > * {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 0.5rem;
		font-size: 1rem;
		font-weight: 300;
		letter-spacing: 1px;
		border-right: 2px solid transparent;
	}

	.nav > *:hover {
		background: var(--c2);
	}

	.nav :global(svg) {
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
