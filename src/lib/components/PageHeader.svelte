<script>
	import RelativeTime from '@yaireo/relative-time';

	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import { store } from '$lib/stores';

	export let title = '';
	export let player;
	export let champion;
	export let imageSize = player ? 68 : 68;

	const relativeTime = new RelativeTime();
</script>

<header class="header">
	<div class="info">
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
		<div class="title-text">
			<h1>{title}</h1>
			{#if $store.splitTitle}
				<div class="split-details">
					<span>{$store.seasonTitle}</span>
					<span>{$store.splitTitle}</span>
					<span>Ends in {relativeTime.from(new Date($store.splitEnd))}</span>
				</div>
			{/if}
		</div>
	</div>
	<slot name="controls" />
</header>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 7rem;
		margin-bottom: 1rem;
	}
	.info {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}
	.title-text {
		display: flex;
		flex-direction: column;
	}
	.header h1 {
		font-size: 3.25rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	.image-container {
		box-shadow: 0 0 0 2px var(--app-bg), 0 0 0 4px var(--c4);

		&.round {
			border-radius: 50%;
		}
	}
	.split-details {
		display: flex;
		gap: 1rem;
		color: var(--c8);
		font-weight: 500;
	}
</style>
