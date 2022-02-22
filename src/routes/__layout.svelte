<script>
	import { onMount } from 'svelte';

	import { store } from '$lib/stores';
	import { page } from '$app/stores';
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

	$: currURL = $page.url.pathname;
	const routes = [
		{
			url: '/players',
			title: 'Players'
		},
		{
			url: '/champions',
			title: 'Champions'
		},
		{
			url: '/matches',
			title: 'Matches'
		},
		{
			url: '/leaderboard',
			title: 'Leaderboard'
		}
	];
</script>

<div class="container">
	<nav class="nav">
		{#each routes as route}
			<a href={route.url} class:active={currURL === route.url}>
				{route.title}
			</a>
		{/each}
	</nav>
	<section class="content">
		<slot />
	</section>
</div>

<style>
	.nav {
		position: fixed;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 100vh;
		width: var(--nav-width);
		padding: calc(var(--gap) / 2);
	}

	.nav > * {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 1.25rem;
		font-weight: 300;
		letter-spacing: 1px;
		border-right: 2px solid transparent;
	}

	.nav > *:hover {
		background: var(--c2);
	}

	.content {
		box-sizing: border-box;
		padding: var(--gap);
		padding-left: var(--nav-width);
		padding-right: 2rem;
		padding-top: 0;
	}

	.nav > .active {
		background: var(--c3);
		border-color: var(--c4);
	}
</style>
