<script context="module">
	export const prerender = true;
	export const load = async () => {
		return { props: { title: 'Leaderboard' } };
	};
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';

	export let title;
</script>

<PageHeader {title} />
