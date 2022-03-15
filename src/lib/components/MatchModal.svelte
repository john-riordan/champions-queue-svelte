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

	const relativeTime = new RelativeTime();
	$: dateRelative = match && relativeTime.from(new Date(match.matchStart));
</script>

<svelte:head>
	{#if match}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if match}
	<div class="container" in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}>
		<div class="backdrop" on:click={resetModal} />
		<div class="match-container">
			<!-- <h1>{dateRelative}</h1> -->
			<div class="bg left" class:victory={match.teams[0].winner} />
			<div class="bg right" class:victory={match.teams[1].winner} />
			<div class="teams">
				<div class="team" class:victory={match.teams[0].winner}>
					<h3 class="outcome">{match.teams[0].winner ? 'Victory' : 'Defeat'}</h3>
					<div class="cols-header">
						<span class="name">Player</span>
						<span class="kda">KDA</span>
						<span class="cs">CS</span>
						<span class="gold">Gold</span>
					</div>
					<ul class="players">
						{#each match.teams[0].players as player}
							<li>
								<a class="player" href={`/players/${player.name}`}>
									<ChampImg name={player.championIcon} />
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
				<div class="line" />
				<div class="team right" class:victory={match.teams[1].winner}>
					<h3 class="outcome">{match.teams[1].winner ? 'Victory' : 'Defeat'}</h3>
					<div class="cols-header">
						<span class="name">Player</span>
						<span class="kda">KDA</span>
						<span class="cs">CS</span>
						<span class="gold">Gold</span>
					</div>
					<ul class="players ">
						{#each match.teams[1].players as player}
							<li>
								<a class="player" href={`/players/${player.name}`}>
									<ChampImg name={player.championIcon} />
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
	</div>
{/if}

<style lang="scss">
	.container {
		position: fixed;
		inset: 0;
		display: grid;
		place-content: center;
		z-index: 10;
	}
	.backdrop {
		position: fixed;
		inset: 0;
		background: var(--app-bg);
		opacity: 0.8;
	}
	.match-container {
		position: relative;
		background: var(--c1);
		padding: 2rem;
		border: 3px solid var(--c2);
		box-shadow: 0 0px 200px 115px var(--c1);
		z-index: 10;
	}

	.outcome {
		font-size: 2rem;
		text-align: right;
		color: var(--red);

		.right & {
			text-align: left;
		}

		.victory & {
			color: var(--blue);
		}
	}

	.cols-header {
		display: flex;
		justify-content: space-between;
		margin: 1.5rem 0 1rem;
		font-weight: 900;
		font-size: 0.875rem;
		color: var(--c9);

		> * {
			text-align: center;
		}
		.name {
			width: 12ch;
			text-align: left;
			margin-left: 4.5rem;

			.right & {
				text-align: right;
				margin-left: 0;
				margin-right: 4.5rem;
			}
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
		}
	}

	.right {
		text-align: right;
	}

	.teams {
		position: relative;
		display: flex;
		justify-content: space-between;
		gap: 2rem;

		:global(.champ-img) {
			--size: 40;
		}
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
		transition: background var(--transition);

		&:hover {
			background: hsla(0deg 0% 0% / 0.2);

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
		color: var(--c8);

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
		--shadow: 3px;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 65%;
		background: linear-gradient(var(--dir), hsla(var(--blue-hsl) / 0.15), transparent);
		box-shadow: inset var(--shadow) 0 0 0 var(--blue);

		&:not(.victory) {
			background: none;
			box-shadow: none;
		}

		&.left {
			left: 0;
		}
		&.right {
			right: 0;
			--dir: to left;
			--shadow: -3px;
		}
	}
</style>
