<script>
	import RelativeTime from '@yaireo/relative-time';

	import { store } from '$lib/stores';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import TeamImg from '$lib/components/TeamImg.svelte';
	import PlayerSocials from '$lib/components/PlayerSocials.svelte';

	export let title = '';
	export let player;
	export let champion;
	export let team;

	const relativeTime = new RelativeTime();
</script>

<header class="header">
	<div class="info">
		{#if player}
			<div class="image-container round">
				<PlayerImg name={player} />
			</div>
		{/if}
		{#if champion}
			<div class="image-container">
				<ChampImg name={champion} />
			</div>
		{/if}
		{#if team}
			<TeamImg name={team} />
		{/if}
		<div class="title-text">
			<h1>
				{title}
				{#if player}
					<PlayerSocials name={player} />
				{/if}
			</h1>

			{#if $store.splitTitle}
				<div class="split-details">
					<span class="season">{$store.seasonTitle}</span>
					<span>{$store.splitTitle}</span>
					{#if $store.splitEnd}
						<span>Ends in {relativeTime.from(new Date($store.splitEnd))}</span>
					{/if}
				</div>
			{/if}
		</div>
	</div>
	<slot name="controls" />
</header>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 7rem;

		:global(.champ-img),
		:global(.player-img) {
			--size: 68;

			@media screen and (max-width: 1000px) {
				--size: 52;
			}
			@media screen and (max-width: 600px) {
				--size: 44;
			}
		}

		:global(.team-img) {
			--size: 100;

			@media screen and (max-width: 1000px) {
				--size: 80;
			}
			@media screen and (max-width: 600px) {
				--size: 60;
			}
		}

		@media screen and (max-width: 1000px) {
			height: 5rem;
		}
		@media screen and (max-width: 800px) {
			height: auto;
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
			margin-top: 2rem;
		}
		@media screen and (max-width: 600px) {
			gap: 0.5rem;
			margin-top: 1rem;
		}
	}
	.info {
		display: flex;
		align-items: center;
		gap: 1.5rem;

		@media screen and (max-width: 1000px) {
			gap: 0.75rem;
		}
		@media screen and (max-width: 800px) {
			align-items: flex-start;
		}
	}
	.title-text {
		display: flex;
		flex-direction: column;
	}
	.header h1 {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 2.75rem;
		font-weight: 900;
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: 4px;

		@media screen and (max-width: 1200px) {
			font-size: 2rem;
		}
		@media screen and (max-width: 800px) {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
			font-size: 1.75rem;
		}
	}
	.image-container {
		margin-left: 4px;
		box-shadow: 0 0 0 2px var(--app-bg), 0 0 0 4px var(--c4);

		&.round {
			margin-left: 0;
			border-radius: 50%;
		}
	}
	.split-details {
		display: flex;
		gap: 1rem;
		color: var(--c8);
		font-size: 1.125rem;
		font-weight: 600;

		@media screen and (max-width: 800px) {
			font-size: 0.875rem;
		}

		.season {
			@media screen and (max-width: 800px) {
				display: none;
			}
		}
	}
</style>
