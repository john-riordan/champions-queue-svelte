<script context="module">
	export const load = async ({ params }) => {
		return { props: { id: params.id } };
	};
</script>

<script>
	import RelativeTime from '@yaireo/relative-time';

	import PageHeader from '$lib/components/PageHeader.svelte';
	import { store } from '$lib/stores';
	import { matchId } from '$lib/helpers';

	export let id;

	$: matches = $store.matches || [];
	$: match = matches.find((match) => {
		return matchId(match) === Number(id);
	});

	const relativeTime = new RelativeTime();
	$: dateRelative = match && relativeTime.from(new Date(match.matchStart));

	$: console.log('xxxx match', $store.loading, dateRelative, match);
</script>

<PageHeader
	title={$store.loading ? 'Loading...' : dateRelative ? dateRelative : 'Match not found'}
/>

{#if match}
	<h1>Match found</h1>
{:else}
	<h1>Match not found</h1>
{/if}
