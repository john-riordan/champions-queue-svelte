<script>
	import { store } from '$lib/stores';

	let isFavorited = false;

	function favoritePage() {
		isFavorited = !isFavorited;
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
	Favorite
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
			background-color: hsla(var(--yellow-hsl) / 0.15);
			color: var(--yellow);
			border-color: var(--yellow);

			svg {
				stroke: none;
				opacity: 1;
				fill: currentColor;
			}
		}
	}
</style>
