<script>
	import { onMount } from 'svelte';

	import { store } from '$lib/stores';
	import { page } from '$app/stores';
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

	export let url;
	let data;

	onMount(async () => {
		data = await fetchData();
		store.set(data);
	});

	async function fetchNewData() {
		const newData = await fetchData();
		store.set(newData);
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
	</section>
</div>
<MatchModal />

<style>
	.nav {
		position: fixed;
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: var(--nav-width);
		padding: var(--gap);
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
		box-sizing: border-box;
		padding: var(--gap);
		padding-left: calc(var(--nav-width) + var(--gap));
		padding-right: 1rem;
		padding-top: 0;
	}

	.nav > .active {
		background: var(--c3);
		border-color: var(--c4);
	}
</style>
