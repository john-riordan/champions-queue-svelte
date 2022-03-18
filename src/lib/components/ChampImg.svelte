<script>
	import { store } from '$lib/stores';
	import { correctChampionImage } from '$lib/constants';

	export let name;
	export let size = 40;

	$: patch = $store.currentPatch || 12.5;

	// Fix the buggy naming of fiddle
	$: fixedName = correctChampionImage(name);
</script>

<div class="champ-img">
	{#if fixedName}
		<img
			width={size}
			height={size}
			loading="lazy"
			alt={name}
			src={`https://ddragon.leagueoflegends.com/cdn/${patch}.1/img/champion/${fixedName}.png`}
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
</style>
