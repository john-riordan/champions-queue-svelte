<script>
	import { store } from '$lib/stores';
	import { correctChampionImage, LOADING_STR } from '$lib/constants';

	export let name;
	export let size = 40;
	export let type = 'square';

	$: patch = $store.currentPatch || 12.18;

	// Fix the buggy naming of fiddle
	$: fixedName = name !== LOADING_STR && correctChampionImage(name);
	$: image =
		type === 'splash'
			? `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${fixedName}_0.jpg`
			: `https://ddragon.leagueoflegends.com/cdn/${patch}.1/img/champion/${fixedName}.png`;
</script>

<div class="champ-img" class:splash={type === 'splash'}>
	{#if fixedName}
		<img
			width={size}
			height={size}
			loading="lazy"
			alt={name}
			src={image}
			class:invis={name === LOADING_STR}
		/>
	{/if}
</div>

<style>
	.champ-img {
		overflow: hidden;
		width: calc(var(--size) * 1px);
		max-width: calc(var(--size) * 1px);
		background: var(--c3);
	}
	.champ-img,
	.champ-img img {
		aspect-ratio: 1;
	}
	.champ-img img {
		display: block;
		width: 100%;
		transform: scale(1.2) translate3d(0, 0, 0);
	}

	.champ-img.splash img {
		aspect-ratio: 308 / 560;
		transform: scale(1.2) translate3d(0px, 4%, 0);
	}
</style>
