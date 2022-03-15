<script>
	import { fly } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	import { favorites } from '$lib/stores';
	import Trash from '$lib/components/icons/Trash.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';

	onMount(() => {
		if (browser) {
			favorites.subscribe((val) => localStorage.setItem('favorites', val));
		}
	});

	$: favs = JSON.parse($favorites) || {};
	$: favoriteList = Object.entries(favs).map(([name, url]) => ({
		name,
		url,
		type: url.includes('/player') ? 'player' : 'champion'
	}));

	function removeFavorite(name) {
		if (!browser) return;
		const newFavs = { ...favs };
		delete newFavs[name];

		favorites.set(JSON.stringify(newFavs));
	}

	const enter = {
		duration: 250,
		x: -25,
		opacity: 0,
		easing: quadOut
	};
	const exit = {
		duration: 250,
		x: 25,
		opacity: 0,
		easing: quadOut
	};
</script>

<div class="favorites">
	<ul class="favorites-list">
		{#each favoriteList.filter((f) => f.type === 'player') as player}
			<li class="favorite" in:fly={enter} out:fly={exit}>
				<a href={player.url} class="favorite-link">
					<PlayerImg name={player.name} />
					<span class="name">{player.name}</span>
				</a>
				<button class="remove" on:click={() => removeFavorite(player.name)}>
					<span>Remove</span>
					<Trash />
				</button>
			</li>
		{/each}
		{#each favoriteList.filter((f) => f.type === 'champion') as champion}
			<li class="favorite" in:fly={enter} out:fly={exit}>
				<a href={champion.url} class="favorite-link">
					<ChampImg name={champion.name} />
					<span class="name">{champion.name}</span>
				</a>
				<button class="remove" on:click={() => removeFavorite(champion.name)}>
					<span>Remove</span>
					<Trash />
				</button>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.favorite {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		&:hover {
			opacity: 1;

			.favorite-link,
			.remove {
				opacity: 1;
			}
			.remove {
				transform: translateX(0);
			}
		}

		:global(.player-img) {
			--size: 24;
		}
		:global(.champ-img) {
			--size: 24;
		}
	}
	.favorite-link {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.25rem 0;
		opacity: 0.5;
		transition: opacity var(--transition);
	}
	.favorites-list {
		display: flex;
		flex-direction: column;
	}
	.remove {
		all: unset;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--red);
		background: hsla(var(--red-hsl) / 0.15);
		padding: 0 0.25rem;
		font-size: 0.875rem;
		font-weight: 800;
		cursor: pointer;
		opacity: 0;
		transform: translateX(0.25rem);
		transition: all var(--transition);

		:global(svg) {
			width: 0.75rem;
			height: 0.75rem;
		}

		&:hover {
			background: hsla(var(--red-hsl) / 0.25);
		}
	}
</style>
