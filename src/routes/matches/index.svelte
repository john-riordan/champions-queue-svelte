<script>
	import PageHeader from '$lib/components/PageHeader.svelte';

	import { store } from '$lib/stores';
</script>

<PageHeader title="Matches" />
<ol>
	{#each $store.matches as match}
		<p>match</p>
	{/each}
</ol>
