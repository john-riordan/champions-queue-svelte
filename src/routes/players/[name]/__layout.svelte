<script context="module">
	export const load = ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
	import { onMount } from 'svelte';

	import { pageBackground } from '$lib/stores';
	import { TEAMS_WORLDS as TEAMS, teamImg } from '$lib/constants';

	export let name;

	$: team = Object.values(TEAMS).find((team) => {
		return name.toLowerCase().startsWith(team.tag.toLowerCase());
	});

	$: if (team) {
		pageBackground.set(teamImg(500, team.logo));
	}

	onMount(() => {
		return () => {
			pageBackground.set(null);
		};
	});
</script>

<slot />
