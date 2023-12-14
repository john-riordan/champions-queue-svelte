<script>
	import { store } from '$lib/stores';

	$: latestPatch = Number($store.matches?.[0]?.gameVersion?.split('.')?.[0]);
</script>

{#if latestPatch && latestPatch < 14}
	<div>Riot has not updated match data to the new Season (2024)</div>
{/if}

<style>
	div {
		text-align: center;
		padding: 0.5rem;
		background: var(--blue);
		color: white;
		font-size: 0.875em;
	}
</style>
