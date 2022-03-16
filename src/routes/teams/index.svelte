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

<h3 class="coming-soon">Team Stats Coming Soon...</h3>

<style lang="scss">
	.coming-soon {
		display: grid;
		place-content: center;
		height: 20rem;
		font-size: 2rem;

		@media screen and (max-width: 1000px) {
			display: block;
			font-size: 1.5rem;
			margin: 2rem 0;
			height: auto;
		}
	}
</style>
