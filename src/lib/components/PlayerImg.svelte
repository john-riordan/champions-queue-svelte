<script>
	import { PLAYERS, PLAYER_DEFAULT } from '$lib/constants';

	export let name;

	$: src = PLAYERS[name] ?? PLAYER_DEFAULT;
</script>

<div class="player-img">
	<img loading="lazy" alt={name} {src} />
</div>

<style>
	.player-img {
		position: relative;
		background: var(--c2);
		width: calc(var(--size) * 1px);
		max-width: calc(var(--size) * 1px);
		aspect-ratio: 1;
		border-radius: 50%;
		overflow: hidden;
	}
	.player-img img {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 130%;
		max-width: none;
		transform: translate(-50%, -50%) translate3d(0, 0, 0);
	}
</style>
