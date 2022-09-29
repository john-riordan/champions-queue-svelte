<script context="module">
	export const load = async () => {
		return { props: { title: 'Matches' } };
	};
</script>

<script>
	import { store } from '$lib/stores';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import Match from '$lib/components/Match.svelte';
	import LoadMoreBtn from '$lib/components/LoadMoreBtn.svelte';

	export let title;
	const perPage = 20;
	let pageIndex = 0;
	$: list = ($store.matches ?? []).slice(0, (pageIndex + 1) * perPage);
</script>

<svelte:head>
	<meta name="twitter:title" content={`Matches - Champions Queue`} />
	<title>Matches - Champions Queue</title>
</svelte:head>

<PageHeader {title} center>
	<!-- <div slot="controls">
		<RefreshBtn />
	</div> -->
</PageHeader>

<ol class="list">
	{#each list as match (match.matchStart)}
		<Match {match} />
	{/each}
</ol>
{#if list.length}
	<LoadMoreBtn block onclick={() => pageIndex++} />
{/if}
