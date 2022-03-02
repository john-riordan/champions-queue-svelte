<script context="module">
	export const load = async () => {
		return { props: { title: 'Matches' } };
	};
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';
	import { store } from '$lib/stores';

	export let title;
	const perPage = 20;
	let pageIndex = 0;
	$: list = ($store.matches ?? []).slice(0, (pageIndex + 1) * perPage);
</script>

<PageHeader {title} />
<ol class="li">
	{#each list as match}
		<Match {match} />
	{/each}
</ol>
{#if list.length}
	<LoadMoreBtn block onclick={() => pageIndex++} />
{/if}
