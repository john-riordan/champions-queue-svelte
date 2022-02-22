<script>
	export let name;
	export let size = 40;
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
	}
	.champ-img,
	.champ-img img {
		aspect-ratio: 1;
	}
	.champ-img img {
		display: block;
		transform: scale(1.2);
	}
</style>
