<script>
	import { winrateColor } from '$lib/helpers';

	export let wins = 0;
	export let games = 1;
	export let height = 4;

	const winrate = wins / games;
	const color = winrateColor(wins / games);
</script>

<div
	class="bar"
	style="--height: {height}; --fill: {winrate}; --empty: {1 - winrate}; --fill-color: {color}"
/>

<style lang="scss">
	.bar {
		display: flex;
		align-items: stretch;
		height: calc(var(--height) * 1px);
		width: 100%;
		background: var(--c5);

		&::before,
		&::after {
			content: '';
		}
		&::before {
			flex: var(--fill);
			background: var(--fill-color, var(--c7));
		}
		&::after {
			flex: calc(1 - var(--fill));
		}
	}
</style>
