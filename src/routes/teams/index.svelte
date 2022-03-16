<script context="module">
	export const load = async () => {
		return { props: { title: 'Teams' } };
	};
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';

	export let title;
</script>

<svelte:head>
	<title>Teams - NA Champion Queue</title>
</svelte:head>

<PageHeader {title} />

<h3>Coming Soon...</h3>
