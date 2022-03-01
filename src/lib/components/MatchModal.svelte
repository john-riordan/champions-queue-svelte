<script>
	import { fade } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';
	import RelativeTime from '@yaireo/relative-time';

	import ChampImg from '$lib/components/ChampImg.svelte';
	import { matchModal } from '$lib/stores';

	let match;

	matchModal.subscribe((m) => (match = m));

	function resetModal() {
		matchModal.set(null);
	}

	beforeNavigate(() => {
		matchModal.set(null);
	});

	const champSize = 48;
	const relativeTime = new RelativeTime();
	$: dateRelative = match && relativeTime.from(new Date(match.matchStart));
</script>

{#if match}
	<div class="container" in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}>
		<div class="backdrop" on:click={resetModal} />
		<div class="match-container">
			<!-- <h1>{dateRelative}</h1> -->
			<div class="bg left" class:victory={match.teams[0].winner} />
			<div class="bg right" class:victory={match.teams[1].winner} />
			<div class="teams">
				<ul class="players">
					{#each match.teams[0].players as player}
						<li>
							<a class="player" href={`/players/${player.name}`}>
								<ChampImg name={player.championIcon} --size={champSize} size={champSize} />
								<span class="name">{player.name}</span>
								<div class="stats">
									<span class="kda">{player.kills} / {player.deaths} / {player.assists}</span>
									<span class="cs">{player.cs.toLocaleString('en-us')}</span>
									<span class="gold">{player.gold.toLocaleString('en-us')}</span>
								</div>
							</a>
						</li>
					{/each}
				</ul>
				<div class="line" />
				<ul class="players right">
					{#each match.teams[1].players as player}
						<li>
							<a class="player" href={`/players/${player.name}`}>
								<ChampImg name={player.championIcon} --size={champSize} size={champSize} />
								<span class="name">{player.name}</span>
								<div class="stats">
									<span class="kda">{player.kills} / {player.deaths} / {player.assists}</span>
									<span class="cs">{player.cs.toLocaleString('en-us')}</span>
									<span class="gold">{player.gold.toLocaleString('en-us')}</span>
								</div>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.container {
		position: fixed;
		inset: 0;
		display: grid;
		place-content: center;
		z-index: 1;
	}
	.backdrop {
		position: fixed;
		inset: 0;
		background: var(--app-bg);
		opacity: 0.8;
		cursor: pointer;
	}
	.match-container {
		position: relative;
		background: var(--c1);
		padding: 2rem;
		border: 3px solid var(--c2);
		box-shadow: 0 0px 300px 115px var(--c1);
		z-index: 1;
	}

	.teams {
		position: relative;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
	}
	.players {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.player {
		display: flex;
		align-items: center;
		gap: 1rem;
		transition: background 0.15s ease;

		&:hover {
			background: hsla(0, 0, 0, 0.2);

			.name {
				text-decoration: underline;
			}
		}

		.name {
			font-weight: 600;
			width: 14ch;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.right & {
			flex-direction: row-reverse;
			text-align: right;
		}
	}

	.stats {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--c7);

		> * {
			text-align: center;
		}
		.kda {
			width: 12ch;
		}
		.gold,
		.cs {
			width: 9ch;
		}

		.right & {
			flex-direction: row-reverse;
			text-align: right;
		}
	}

	.line {
		width: 1px;
		background: var(--c2);
	}

	.bg {
		--dir: to right;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 65%;
		background: linear-gradient(var(--dir), var(--blue), transparent);
		opacity: 0.1;

		&:not(.victory) {
			background: none;
		}

		&.left {
			left: 0;
		}
		&.right {
			right: 0;
			--dir: to left;
		}
	}
</style>
