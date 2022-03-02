<script>
	import { PLAYERS, PLAYER_DEFAULT } from '$lib/constants';

	export let name;
	export let size;

	$: src = PLAYERS[name] ?? PLAYER_DEFAULT;
</script>

<div class="player-img">
	<img loading="lazy" alt={name} {src} width={size} />
</div>

<style>
	.player-img {
		position: relative;
		background: var(--c2);
		height: calc(var(--size) * 1px);
		max-height: calc(var(--size) * 1px);
		aspect-ratio: 1;
		border-radius: 50%;
		overflow: hidden;
	}
	.player-img img {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		height: 130%;
		width: auto;
		max-width: none;
		transform: translate(-50%, -50%) translate3d(0, 0, 0);
	}
</style>
