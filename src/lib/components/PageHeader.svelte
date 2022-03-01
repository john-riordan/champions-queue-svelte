<script>
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';

	export let title = '';
	export let player;
	export let champion;
	export let imageSize = 52;
</script>

<header class="pageHeader">
	{#if player}
		<div class="image-container round">
			<PlayerImg name={player} size={imageSize} --size={imageSize} />
		</div>
	{/if}
	{#if champion}
		<div class="image-container">
			<ChampImg name={champion} size={imageSize} --size={imageSize} />
		</div>
	{/if}
	<h1>{title}</h1>
</header>

<style lang="scss">
	.pageHeader {
		position: sticky;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		top: 0;
		height: 6rem;
		background: var(--app-bg);
		z-index: 1;
	}
	.pageHeader h1 {
		font-size: 2rem;
	}
	.image-container {
		box-shadow: 0 0 0 2px var(--app-bg), 0 0 0 4px var(--c4);

		&.round {
			border-radius: 50%;
		}
	}
</style>
