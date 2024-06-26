<script>
	import { fly } from 'svelte/transition';
	import { beforeNavigate } from '$app/navigation';
	import RelativeTime from '@yaireo/relative-time';

	import ChampImg from '$lib/components/ChampImg.svelte';
	import { matchModal } from '$lib/stores';
	import { findPlayerTeam } from '$lib/helpers';
	import TeamImg from '$lib/components/TeamImg.svelte';

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
	<div class="container">
		<div class="backdrop" on:click={resetModal} />
		<div
			class="match-container"
			in:fly={{ y: 50, duration: 200 }}
			out:fly={{ y: 50, duration: 200 }}
		>
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
							{@const team = findPlayerTeam(player.name)}
							<li>
								<a class="player" href={`/players/${player.name}`}>
									<ChampImg name={player.championIcon} />
									{#if team}
										<TeamImg name={team.name} />
									{:else}
										<div class="no-team" />
									{/if}
									<span class="name lg">{player.name}</span>
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
							{@const team = findPlayerTeam(player.name)}
							<li>
								<a class="player" href={`/players/${player.name}`}>
									<ChampImg name={player.championIcon} />
									{#if team}
										<TeamImg name={team.name} />
									{:else}
										<div class="no-team" />
									{/if}
									<span class="name lg">{player.name}</span>
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
		border: 4px solid var(--c3);
		box-shadow: 0 0px 200px 115px var(--c1);
		z-index: 10;

		@media screen and (max-width: 1100px) {
			padding: 1rem;
		}
	}

	.outcome {
		font-size: 2rem;
		line-height: 1;
		text-align: right;
		color: var(--red);

		@media screen and (max-width: 1100px) {
			text-align: left;
			line-height: 1;
			font-size: 1.5rem;
		}

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

		@media screen and (max-width: 1100px) {
			margin: 0.75rem 0 0.5rem;
		}

		> * {
			text-align: center;
		}
		.name {
			width: 12ch;
			text-align: left;
			margin-left: 7.5rem;

			@media screen and (max-width: 400px) {
				width: 7ch;
				margin-left: 3.5rem;
			}

			.right & {
				text-align: right;
				margin-left: 0;
				margin-right: 7.5rem;

				@media screen and (max-width: 1100px) {
					text-align: left;
					margin-left: 7.5rem;
					margin-right: unset;
				}
				@media screen and (max-width: 400px) {
					margin-left: 3.5rem;
				}
			}
		}
		.kda {
			width: 12ch;
		}
		.gold,
		.cs {
			width: 7ch;
		}

		.right & {
			flex-direction: row-reverse;

			@media screen and (max-width: 1100px) {
				flex-direction: row;
			}
		}
	}

	.gold,
	.cs {
		@media screen and (max-width: 600px) {
			display: none;
		}
	}

	.right {
		text-align: right;

		@media screen and (max-width: 1100px) {
			text-align: left;
		}
	}

	.teams {
		position: relative;
		display: flex;
		justify-content: space-between;
		gap: 2rem;

		:global(.champ-img) {
			--size: 60;

			@media screen and (max-width: 1300px) {
				--size: 48;
			}
			@media screen and (max-width: 400px) {
				--size: 32;
			}
		}

		@media screen and (max-width: 1100px) {
			flex-direction: column;
			gap: 0.5rem;
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
		gap: 0.75rem;
		transition: background var(--transition);

		&:hover {
			background: hsla(0deg 0% 0% / 0.2);

			.name {
				text-decoration: underline;
			}
		}

		:global(.team-img) {
			--size: 40;

			@media screen and (max-width: 400px) {
				--size: 24;
			}
		}
		.no-team {
			width: 2.5rem;

			@media screen and (max-width: 400px) {
				width: 24px;
			}
		}

		.name {
			width: 14ch;
			font-size: 1.25rem;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;

			@media screen and (max-width: 400px) {
				font-size: 1rem;
			}
		}

		.right & {
			flex-direction: row-reverse;
			text-align: right;

			@media screen and (max-width: 1100px) {
				text-align: left;
				flex-direction: row;
			}
		}
	}

	.stats {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 1.25em;
		color: var(--c8);

		@media screen and (max-width: 600px) {
			gap: 0rem;
		}

		@media screen and (max-width: 1100px) {
			font-size: 0.875em;
		}

		> * {
			text-align: center;
		}
		.kda {
			width: 12ch;
		}
		.gold,
		.cs {
			width: 7ch;
		}

		.right & {
			flex-direction: row-reverse;
			text-align: right;

			@media screen and (max-width: 1100px) {
				flex-direction: row;
				text-align: left;
			}
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

		@media screen and (max-width: 1100px) {
			display: none;
		}

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
