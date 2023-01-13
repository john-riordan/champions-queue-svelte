<script>
	import RelativeTime from '@yaireo/relative-time';
	import { store, pageBackground } from '$lib/stores';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import TeamImg from '$lib/components/TeamImg.svelte';
	import PlayerSocials from '$lib/components/PlayerSocials.svelte';

	const relativeTime = new RelativeTime();

	export let title = '';
	export let player;
	export let champion;
	export let team;
	export let center = false;

	$: playerName = title;
</script>

<header class="header" class:center>
	{#if $pageBackground}
		<img src={$pageBackground} class="background" loading="lazy" alt="background" />
	{/if}
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
				{playerName}
				{#if player}
					<PlayerSocials name={player} />
				{/if}
			</h1>

			<div class="split-details">
				<span class="season">{$store.seasonTitle}</span>
				{#if $store.splitTitle}
					-
					<span>{$store.splitTitle}</span>
				{/if}
				{#if $store.seasonEnd}
					-
					<span>Ends in {relativeTime.from(new Date($store.seasonEnd))}</span>
				{/if}
			</div>
		</div>
	</div>
	<slot name="controls" />
</header>

<style lang="scss">
	.header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 2rem;
		width: 100%;
		height: 13rem;
		background-color: var(--logo);
		background: url('/flag-black.webp') no-repeat;
		background-size: 100% auto;
		background-position: center 50%;
		overflow: hidden;

		&.center {
			justify-content: center;
		}

		:global(.champ-img),
		:global(.player-img) {
			--size: 208;

			@media screen and (max-width: 1000px) {
				--size: 80;
			}
		}

		:global(.team-img) {
			--size: 150;

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
		@media screen and (max-width: 600px) {
			gap: 0.5rem;
			margin-top: 0;
			padding-inline: 1rem;
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
		letter-spacing: 0;
		white-space: nowrap;

		@media screen and (max-width: 1600px) {
			max-width: 20ch;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		@media screen and (max-width: 1200px) {
			font-size: 4rem;
		}
		@media screen and (max-width: 1000px) {
			font-size: 2.25rem;
		}
	}
	.split-details {
		display: flex;
		gap: 1rem;
		text-transform: uppercase;
		letter-spacing: 4px;
		color: var(--c10);

		@media screen and (max-width: 800px) {
			font-size: 0.875rem;
		}
		@media screen and (max-width: 600px) {
			font-size: 0.75rem;
		}

		.season {
			@media screen and (max-width: 800px) {
				display: none;
			}
		}
	}

	.background {
		position: absolute;
		top: 50%;
		left: -5%;
		width: 500px;
		height: auto;
		opacity: 0.25;
		filter: contrast(0) grayscale(100%);
		mix-blend-mode: color-dodge;
		pointer-events: none;
		transform: translateY(-50%);

		@media screen and (max-width: 800px) {
			width: 300px;
		}
	}
</style>
