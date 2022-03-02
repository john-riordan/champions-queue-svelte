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
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.0237 27.9323C8.36689 21.73 11.1071 15.1923 16.6948 12.0158C22.2826 8.83927 29.3133 9.82255 33.8115 14.4096L27.3457 19.3941L44 20.6042L42.7781 4L37.756 10.4431C31.9757 4.61419 23.182 2.97077 15.6808 6.31758C8.17965 9.66439 3.54095 17.3009 4.03607 25.488C4.53119 33.6751 10.0565 40.6991 17.9066 43.1208C25.7566 45.5424 34.2883 42.8549 39.3242 36.3741L34.9852 32.8398C32.3196 36.3515 28.1617 38.4161 23.748 38.4198C17.3178 38.4424 11.6805 34.1347 10.0237 27.9323Z"
						fill="#FFFFFF"
					/>
				</svg>
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

		svg {
			width: 4rem;
			height: 4rem;
			animation: spin 1s linear forwards infinite;
		}
	}
	.background {
		position: absolute;
		top: -10%;
		right: -7%;
		width: 25vw;
		height: auto;
		opacity: 0.05;
		filter: saturate(0);
	}
</style>
