<script>
	import RelativeTime from '@yaireo/relative-time';

	import { matchModal } from '$lib/stores';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import { formatPatch } from '$lib/helpers';
	import { correctChampionDisplayName } from '$lib/constants';

	export let match;
	export let champion;
	export let player;

	const relativeTime = new RelativeTime();
	const dateRelative = relativeTime.from(new Date(match.matchStart));

	$: t1 = match.teams[0].players.map((p) => ({ ...p, winner: match.teams[0].winner }));
	$: t2 = match.teams[1].players.map((p) => ({ ...p, winner: match.teams[1].winner }));
	$: teams = t1.concat(t2);
	$: stats = champion
		? teams.find((p) => correctChampionDisplayName(p.championIcon) === champion)
		: teams.find((p) => p.name === player);
	$: nonSpecificMatch = !champion && !player;
	$: outcome = stats?.winner ? 'Victory' : 'Defeat';
	$: patch = formatPatch(match?.gameVersion);

	function updateModal() {
		matchModal.set(match);
	}
</script>

<li
	class="match"
	class:victory={stats?.winner}
	class:noHighlight={nonSpecificMatch}
	on:click={updateModal}
>
	{#if stats}
		<div class="info">
			<div class="champ-container" class:victory={stats.winner}>
				<ChampImg name={stats.championIcon} />
			</div>
			<div class="match-stats">
				<div class="statline">
					<span class="stat outcome" class:victory={stats.winner}>{outcome}</span>
					<span class="stat timeago">{dateRelative}</span>
					<span class="stat patch">{patch}</span>
				</div>
				<div class="statline">
					{#if champion}
						<span class="stat-player">{stats.name}</span>
					{/if}
					<span class="stat">
						<span>{stats.kills} / {stats.deaths} / {stats.assists}</span>
					</span>
					<span class="stat cs">
						<span class="stat-prefix">CS:</span>
						<span>{stats.cs}</span>
					</span>
				</div>
			</div>
		</div>
	{:else}
		<div class="info">
			<div class="match-stats">
				<div class="statline">
					<span class="stat patch">{patch}</span>
					<span class="stat timeago">{dateRelative}</span>
				</div>
			</div>
		</div>
	{/if}
	<div class="playerlist">
		<div class="players">
			{#each t1 as player}
				<div class="player" class:highlight={player.winner}>
					<div>
						<ChampImg name={player.championIcon} />
					</div>
					{#if nonSpecificMatch}
						<span class="player-name">{player.name}</span>
					{/if}
				</div>
			{/each}
		</div>
		<div class="players">
			{#each t2 as player}
				<div class="player" class:highlight={player.winner}>
					<div>
						<ChampImg name={player.championIcon} />
					</div>
					{#if nonSpecificMatch}
						<span class="player-name">{player.name}</span>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</li>

<style lang="scss">
	.match {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem;
		border-top: 2px solid var(--app-bg);
		border-bottom: 2px solid var(--app-bg);
		background: var(--c2);
		transition: background var(--transition);
		cursor: pointer;

		@media screen and (max-width: 600px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 1rem;
			padding: 1rem;
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0 15% 0 0;
			opacity: 0.075;
			transition: opacity var(--transition);
		}
		&:hover {
			&::before {
				opacity: 0.25;
			}
		}
		&.victory::before {
			background: linear-gradient(to right, var(--blue), transparent);
		}
		&:not(.victory)::before {
			background: linear-gradient(to right, var(--red), transparent);
		}
		&.noHighlight {
			@media screen and (max-width: 1300px) {
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: 1rem;
			}

			&::before {
				content: none;
			}
			&:hover {
				background: var(--c3);
			}
		}
	}

	.match > * {
		position: relative;
	}

	.info {
		display: flex;
		align-items: center;
		gap: 1rem;

		@media screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.champ-container {
			box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--red);

			:global(.champ-img) {
				--size: 56;

				@media screen and (max-width: 1100px) {
					--size: 36;
				}
			}
		}
		.champ-container.victory {
			box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--blue);
		}
	}

	.info .match-stats {
		display: flex;
		flex-direction: column;
	}
	.statline {
		display: flex;
		gap: 1.5rem;
	}
	.stat-prefix {
		color: var(--c8);
	}
	.outcome {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--red);
		transform: translate3d(0, 0, 0);
	}

	.stat.patch {
		color: var(--c8);

		@media screen and (max-width: 600px) {
			display: none;
		}
	}
	.stat.patch,
	.stat.cs,
	.stat.timeago {
		@media screen and (min-width: 600px) and (max-width: 800px) {
			display: none;
		}
	}
	.stat.timeago {
		text-transform: capitalize;
	}
	.stat.cs {
		@media screen and (max-width: 600px) {
			display: none;
		}
	}
	.stat-player {
		font-weight: 600;
	}

	.outcome.victory {
		color: var(--blue);
	}
	.playerlist {
		display: flex;
		gap: 2rem;

		@media screen and (max-width: 800px) {
			gap: 1rem;
		}

		@media screen and (max-width: 600px) {
			flex-direction: column;
			gap: 0.5rem;
		}
	}
	.players {
		display: flex;
		gap: 0.75rem;

		@media screen and (max-width: 600px) {
			gap: 0.25rem;
		}

		:global(.champ-img) {
			--size: 32;

			@media screen and (max-width: 1100px) {
				--size: 24;
			}
			@media screen and (max-width: 600px) {
				--size: 28;
			}
		}

		.noHighlight & {
			gap: 0.25rem;

			:global(.champ-img) {
				--size: 52;

				@media screen and (max-width: 1100px) {
					--size: 40;
				}
				@media screen and (max-width: 600px) {
					--size: 32;
				}
			}
		}

		.player {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}
	}
	.champ-img {
		.noHighlight .highlight & {
			box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--blue);
		}
	}
	.highlight :global(.champ-img) {
		box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--blue);
	}
	.player-name {
		display: block;
		width: 11ch;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--c8);
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		overflow: hidden;

		.noHighlight .highlight & {
			color: var(--blue);
		}

		.noHighlight & {
			@media screen and (max-width: 1200px) {
				width: 9ch;
			}
			@media screen and (max-width: 1000px) {
				width: 8ch;
			}
		}
	}
</style>
