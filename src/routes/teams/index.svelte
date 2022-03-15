<script context="module">
	export const load = async () => {
		return { props: { title: 'Teams' } };
	};
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';

	export let title;
</script>

<PageHeader {title} />

<h3>Coming Soon...</h3>
