<script>
	import { PLAYERS } from '$lib/constants';

	import Twitter from '$lib/components/icons/Twitter.svelte';
	import Twitch from '$lib/components/icons/Twitch.svelte';
	import Youtube from '$lib/components/icons/Youtube.svelte';

	export let name;

	$: twitterLink = PLAYERS?.[name]?.socialLinks?.find(
		(links) => links.platform === 'twitter'
	)?.link;
	$: twitchLink = PLAYERS?.[name]?.socialLinks?.find((links) => links.platform === 'twitch')?.link;
	$: youtubeLink = PLAYERS?.[name]?.socialLinks?.find(
		(links) => links.platform === 'youtube'
	)?.link;
</script>

<div class="player-socials">
	{#if twitchLink}
		<a href={twitchLink}>
			<Twitch />
		</a>
	{/if}
	{#if twitterLink}
		<a href={twitterLink}>
			<Twitter />
		</a>
	{/if}
	{#if youtubeLink}
		<a href={youtubeLink}>
			<Youtube />
		</a>
	{/if}
</div>

<style lang="scss">
	.player-socials {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--c8);
		font-size: 1.125rem;

		:global(svg) {
			width: 1.75rem;
			height: auto;
		}
	}
</style>
