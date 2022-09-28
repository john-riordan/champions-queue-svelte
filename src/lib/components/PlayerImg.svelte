<script>
	import { PLAYERS, PLAYER_DEFAULT } from '$lib/constants';

	export let name;
	export let round = false;

	$: src = PLAYERS[name]?.image ?? PLAYER_DEFAULT;
</script>

<div class="player-img" class:round>
	<img loading="lazy" alt={name} {src} width={80} />
</div>

<style lang="scss">
	.player-img {
		position: relative;
		height: calc(var(--size) * 1px);
		max-height: calc(var(--size) * 1px);
		aspect-ratio: 1;
		overflow: hidden;

		&.round {
			border-radius: 50%;
		}

		img {
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			height: 130%;
			width: auto;
			max-width: none;
			transform: translate(-50%, -50%) translate3d(0, 0, 0);
		}
	}
</style>
