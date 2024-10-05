

<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { pageBackground } from '$lib/stores';
	import { TEAMS, teamImg } from '$lib/constants';

	const { name } = $page.params;

	$: team = Object.values(TEAMS).find((team) => {
		return name?.toLowerCase().startsWith(team?.tag?.toLowerCase());
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
