<script>
	import { TEAMS, teamImg } from '$lib/constants';

	export let name;

	$: teamInfo = TEAMS[name] || Object.values(TEAMS).find((team) => team.name === name);
	$: src = teamInfo && teamImg(150, teamInfo.logo);
</script>

<div class="team-img">
	{#if src}
		<img loading="lazy" alt={name} {src} width="80" height="80" />
	{/if}
</div>

<style>
	.team-img,
	img {
		position: relative;
		width: calc(var(--size) * 1px);
		max-width: 100%;
		height: auto;
		aspect-ratio: 1;
		overflow: hidden;
	}
</style>
