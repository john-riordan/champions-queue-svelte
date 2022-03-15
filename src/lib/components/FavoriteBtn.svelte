<script>
	import { browser } from '$app/env';
	import { page } from '$app/stores';

	import { favorites } from '$lib/stores';

	const {
		url: { pathname },
		params: { name }
	} = $page;

	$: favs = JSON.parse($favorites) || {};
	$: isFavorited = favs?.[name];

	function favoritePage() {
		if (!browser) return;
		if (isFavorited) {
			const newFavs = { ...favs };
			delete newFavs[name];

			favorites.set(JSON.stringify(newFavs));
		} else {
			favorites.set(JSON.stringify({ ...favs, [name]: pathname }));
		}
	}
</script>

<button on:click={favoritePage} class:isFavorited>
	<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M24 35.8505L12.2574 42L14.5 28.9751L5 19.7508L18.1287 17.8505L24 6L29.8713 17.8505L43 19.7508L33.5 28.9751L35.7426 42L24 35.8505Z"
		/>
	</svg>
	{#if !isFavorited}
		Favorite
	{/if}
</button>

<style lang="scss">
	button {
		svg {
			fill: none;
			stroke: currentColor;
			stroke-width: 4;
			width: 1.25rem;
			opacity: 0.5;
		}
		&.isFavorited {
			background-color: hsla(var(--yellow-hsl) / 0.25);
			color: var(--yellow);
			border-color: var(--yellow);
			box-shadow: inset 0 0 0 1px var(--yellow);

			svg {
				width: 1.75rem;
				stroke: none;
				opacity: 1;
				fill: currentColor;
			}
		}
	}
</style>
