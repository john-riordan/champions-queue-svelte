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
	export let center = false;

	const relativeTime = new RelativeTime();
</script>

<header class="header" class:center>
	<div class="info">
		{#if player}
			<div class="image-container">
				<PlayerImg name={player} />
			</div>
		{/if}
		{#if champion}
			<div class="image-container">
				<ChampImg name={champion} type="splash" />
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
					<span>Worlds 2022</span>
					<!-- <span class="season">{$store.seasonTitle}</span>
					<span>{$store.splitTitle}</span>
					{#if $store.splitEnd}
						<span>Ends in {relativeTime.from(new Date($store.splitEnd))}</span>
					{/if} -->
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
		padding-inline: 2rem;
		width: 100%;
		height: 13rem;
		background-color: var(--logo);
		background: url('/flag-blue.webp') no-repeat;
		background-size: 100% auto;
		background-position: center 50%;

		&.center {
			justify-content: center;
		}

		:global(.champ-img),
		:global(.player-img) {
			--size: 208;

			@media screen and (max-width: 1000px) {
				--size: 80;
			}
			/* @media screen and (max-width: 600px) {
				--size: 44;
			} */
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
		gap: 3.5rem;

		@media screen and (max-width: 1000px) {
			gap: 0.75rem;
		}
	}
	.title-text {
		display: flex;
		flex-direction: column;

		.center & {
			align-items: center;
		}
	}
	.header h1 {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 6rem;
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: 0.2rem;

		@media screen and (max-width: 1200px) {
			font-size: 4rem;
		}
		@media screen and (max-width: 1000px) {
			/* flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem; */
			font-size: 1.75rem;
		}
	}
	.split-details {
		display: flex;
		gap: 1rem;
		text-transform: uppercase;
		letter-spacing: 8px;
		color: var(--c10);

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
