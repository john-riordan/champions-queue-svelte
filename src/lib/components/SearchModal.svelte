<script>
	import { fade } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';

	import { searchModal } from '$lib/stores';
	import GlobalSearch from '$lib/components/GlobalSearch.svelte';

	function resetModal() {
		searchModal.set(false);
	}

	beforeNavigate(() => {
		searchModal.set(false);
	});
</script>

<svelte:head>
	{#if $searchModal}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if $searchModal}
	<div class="container" in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}>
		<div class="backdrop" on:click={resetModal} />
		<GlobalSearch />
	</div>
{/if}

<style lang="scss">
	.container {
		--btn-height: 4rem;
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		padding-top: 14rem;
		z-index: 10;

		@media screen and (max-width: 1000px) {
			--btn-height: 3.5rem;
			padding-top: 8rem;
		}
		@media screen and (max-width: 600px) {
			padding-top: 4rem;
		}

		:global(.search-container) {
			width: 50vw;
			height: var(--btn-height);

			@media screen and (max-width: 1000px) {
				width: 75vw;
			}
			@media screen and (max-width: 600px) {
				width: 85vw;
			}
		}
		:global(input[type='text']) {
			padding: 0 1.5rem;
			font-size: 1.25rem;

			@media screen and (max-width: 1000px) {
				padding: 0 1.25rem;
				font-size: 1rem;
			}
		}
		:global(.champ-img),
		:global(.player-img) {
			--size: 32 !important;
		}
	}
	.backdrop {
		position: fixed;
		inset: 0;
		background: var(--app-bg);
		opacity: 0.9;
	}
</style>
