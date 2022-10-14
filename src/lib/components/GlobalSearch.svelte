<script>
	import { goto } from '$app/navigation';

	import { store } from '$lib/stores';
	import { TEAMS } from '$lib/constants';
	import clickOutside from '$lib/actions/clickOutside';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import TeamImg from './TeamImg.svelte';

	export let maxCount = 3;
	let inputElem;
	let searchText = '';
	let selectedIndex = -1;
	let focused = false;

	$: disabled = !$store.champions;
	$: players = Object.values($store.leaderboard || {})
		.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()))
		.slice(0, maxCount)
		.map((p) => ({ ...p, url: `/players/${p.name}` }));
	$: champions = Object.values($store.champions || {})
		.filter((c) => c.name.toLowerCase().includes(searchText.toLowerCase()))
		.slice(0, maxCount)
		.map((c) => ({ ...c, url: `/champions/${c.name}` }));
	$: teams = Object.keys($store.teams || {})
		.map((tag) => TEAMS[tag])
		.filter((t) => t.name.toLowerCase().includes(searchText.toLowerCase()))
		.slice(0, maxCount)
		.map((t) => ({ ...t, url: `/teams/${t.name}` }));
	$: list = [...players, ...champions, ...teams];
	$: isOpen = searchText.length;

	$: playerResults = list.filter((item) => item.url.includes('player'));
	$: championResults = list.filter((item) => item.url.includes('champion'));
	$: teamResults = list.filter((item) => item.url.includes('team'));

	$: selectedKey = list[selectedIndex]?.url;
	$: {
		if (($store.players || $store.champions || $store.teams) && inputElem) {
			inputElem.focus();
			focused = true;
		}
	}

	function handleKeydown(event) {
		if (!searchText.length) return;
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			selectedIndex += 1;
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			selectedIndex -= 1;
		} else if (event.key === 'Enter') {
			event.preventDefault();
			const list = [...players, ...champions, ...teams];
			const selected = list[selectedIndex];

			if (selected.url) goto(selected.url);
		} else if (event.key === 'Escape') {
			searchText = '';
		} else {
			selectedIndex = -1;
		}
	}

	function handleClickOutside() {
		if (focused && searchText.length) {
			searchText = '';
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div
	class="search-container"
	class:disabled
	use:clickOutside
	on:clickedOutside={handleClickOutside}
>
	<input
		class="input"
		type="text"
		placeholder="Search for a Player, Champion, or Team Name"
		bind:this={inputElem}
		bind:value={searchText}
	/>
	{#if isOpen}
		<div class="results">
			{#if !list.length}
				<h4 class="no-results">No Search Results for "{searchText}" 😢</h4>
			{:else}
				<div class:hide={!playerResults.length}>
					<span class="group-header">Players</span>
					<ul>
						{#each playerResults as player, i}
							{@const name = player.name}
							<li>
								<a
									href={player.url}
									class="result"
									class:highlight={selectedKey === player.url}
									on:mouseenter={(selectedIndex = i)}
									on:mouseleave={(selectedIndex = null)}
								>
									<PlayerImg {name} />
									<span class="name">{name}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class:hide={!championResults.length}>
					<span class="group-header">Champions</span>
					<ul>
						{#each championResults as champion, i}
							<li>
								<a
									href={champion.url}
									class="result"
									class:highlight={selectedKey === champion.url}
									on:mouseenter={(selectedIndex = i)}
									on:mouseleave={(selectedIndex = null)}
								>
									<ChampImg name={champion.name} />
									<span class="name">{champion.name}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class:hide={!teamResults.length}>
					<span class="group-header">Teams</span>
					<ul>
						{#each teamResults as team, i}
							<li>
								<a
									href={team.url}
									class="result"
									class:highlight={selectedKey === team.url}
									on:mouseenter={(selectedIndex = i)}
									on:mouseleave={(selectedIndex = null)}
								>
									<TeamImg name={team.name} />
									<span class="name">{team.name}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	.search-container {
		--padd: 1.5rem;
		position: relative;

		&.disabled {
			position: none;
			opacity: 0.38;
		}

		.input {
			width: 100%;

			&::placeholder {
				text-transform: none;
			}
		}
	}
	.results {
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		top: var(--btn-height);
		width: 100%;
		padding: var(--padd) 0;
		background-color: var(--c1);
		border: 2px solid var(--c2);
		box-shadow: 0 32px 43px 0px var(--c1);
		transform: translateY(-2px);
		z-index: 1;

		.group-header {
			text-transform: uppercase;
			font-size: 0.75rem;
			color: var(--c8);
			letter-spacing: 2px;
			padding: 0 var(--padd);
		}

		.result {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.25rem var(--padd);

			&:hover,
			&.highlight {
				background: var(--c3);
			}
		}

		:global(.champ-img),
		:global(.player-img),
		:global(.team-img) {
			--size: 24;
		}

		.name {
			font-weight: 600;
			width: 20ch;
		}

		.no-results {
			display: grid;
			place-content: center;
			min-height: 10rem;
		}
	}
</style>
