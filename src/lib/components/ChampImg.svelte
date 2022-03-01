<script>
	export let name;
	export let size = 40;

	// Fix the buggy namign of fiddle
	name = name === 'FiddleSticks' ? 'Fiddlesticks' : name;
</script>

<div class="champ-img">
	<img
		width={size}
		height={size}
		loading="lazy"
		alt={name}
		src={`https://blitz-cdn.blitz.gg/blitz/lol/champion/${name}.webp`}
	/>
</div>

<style>
	.champ-img {
		overflow: hidden;
		width: calc(var(--size) * 1px);
		max-width: calc(var(--size) * 1px);
	}
	.champ-img,
	.champ-img img {
		aspect-ratio: 1;
	}
	.champ-img img {
		display: block;
		transform: scale(1.2) translate3d(0, 0, 0);
	}
</style>
