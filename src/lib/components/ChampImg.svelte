<script>
	import { store } from '$lib/stores';
	import { CORRECT_CHAMPION_NAME } from '$lib/constants';

	export let name;
	export let size = 40;

	$: patch = $store.currentPatch || 12.5;

	// Fix the buggy naming of fiddle
	$: fixedName = CORRECT_CHAMPION_NAME[name] || name;
</script>

<div class="champ-img">
	<img
		width={size}
		height={size}
		loading="lazy"
		alt={name}
		src={`http://ddragon.leagueoflegends.com/cdn/${patch}.1/img/champion/${fixedName}.png`}
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
