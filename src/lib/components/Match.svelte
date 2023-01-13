<script>
	import RelativeTime from '@yaireo/relative-time';

	import { matchModal } from '$lib/stores';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import TeamImg from '$lib/components/TeamImg.svelte';
	import { formatPatch, findPlayerTeam } from '$lib/helpers';
	import { correctChampionDisplayName, PLAYERS } from '$lib/constants';

	export let match;
	export let champion = null;
	export let player = null;

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
	$: proTeams = teams
		.map((player) => findPlayerTeam(player.name))
		.filter(Boolean)
		.reduce((acc, curr) => {
			if (acc.includes(curr.name)) return acc;
			acc.push(curr.name);
			return acc;
		}, []);

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
				<span class="stat outcome lg" class:victory={stats.winner}>{outcome}</span>
				<span class="stat patch">{patch}</span>
				<span class="stat timeago">{dateRelative}</span>
				{#if champion}
					<span class="stat-player">{stats.name}</span>
				{/if}
				<span class="stat stat-kda">
					<span>{stats.kills} / {stats.deaths} / {stats.assists}</span>
				</span>
				<span class="stat stat-cs">
					<span class="stat-prefix">CS:</span>
					<span>{stats.cs}</span>
				</span>
			</div>
		</div>
	{:else}
		<div class="info">
			<div class="match-stats">
				<span class="stat timeago lg">{dateRelative}</span>
				<span class="stat patch lg">{patch}</span>
			</div>
			{#if nonSpecificMatch && proTeams.length}
				<div class="teams-list">
					{#each proTeams as proTeamName}
						<TeamImg name={proTeamName} />
					{/each}
				</div>
			{/if}
		</div>
	{/if}
	<div class="playerlist">
		<div class="players">
			{#each t1 as player}
				{@const playerImg = PLAYERS[player.name]?.image}
				<div class="player" class:highlight={player.winner}>
					<div class="player-champ-container">
						<ChampImg name={player.championIcon} />
						{#if playerImg && nonSpecificMatch}
							<PlayerImg name={player.name} />
						{/if}
					</div>
					{#if nonSpecificMatch}
						<span class="player-name">{player.name}</span>
					{/if}
				</div>
			{/each}
		</div>
		<div class="players">
			{#each t2 as player}
				{@const playerImg = PLAYERS[player.name]?.image}
				<div class="player" class:highlight={player.winner}>
					<div class="player-champ-container">
						<ChampImg name={player.championIcon} />
						{#if playerImg && nonSpecificMatch}
							<PlayerImg name={player.name} />
						{/if}
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
		padding-left: 8px;
		transition: background var(--transition);
		cursor: pointer;
		border-bottom: 1px solid var(--c3);

		&:first-child {
			border-top: 1px solid var(--c3);
		}

		&:hover {
			background: var(--c2);
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			width: 4px;
		}
		&.victory::before {
			background: var(--blue);
		}
		&:not(.victory)::before {
			background: var(--red);
		}
		&.noHighlight {
			padding: 1rem;

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
				background: var(--c2);
			}

			:global(.team-img) {
				--size: 32;

				@media screen and (min-width: 1800px) {
					--size: 40;
				}
			}
		}

		@media screen and (max-width: 800px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 1rem;
			padding: 1rem;
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
			gap: 0.5rem;
		}

		.noHighlight & {
			gap: 2rem;

			@media screen and (min-width: 1800px) {
				gap: 4rem;
			}
			@media screen and (max-width: 1600px) and (min-width: 1300px) {
				flex-direction: column;
				align-items: flex-start;
				gap: 1rem;
			}
			@media screen and (max-width: 600px) {
				flex-direction: column;
				align-items: flex-start;
				gap: 0.5rem;
			}
		}

		.champ-container {
			:global(.champ-img) {
				--size: 80;

				@media screen and (max-width: 1100px) {
					--size: 60;
				}
			}
		}
	}

	.teams-list {
		display: flex;
		gap: 0.5rem;
	}

	.match-stats {
		display: grid;
		grid-template-columns: repeat(3, 7.5rem);
		align-items: baseline;

		.noHighlight & {
			display: flex;
			gap: 1rem;

			.timeago,
			.patch {
				font-size: 1.75rem;
			}
			.timeago {
				width: 14ch;
			}
		}

		@media screen and (max-width: 800px) {
			grid-template-columns: repeat(3, 6rem);
		}
	}
	.statline {
		display: flex;
		align-items: baseline;
		gap: 1.5rem;
	}
	.stat-prefix {
		color: var(--c8);
	}
	.outcome {
		font-size: 2rem;
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--red);
		transform: translate3d(0, 0, 0);
	}

	.stat.patch {
		color: var(--c6);

		.noHighlight & {
			color: var(--c4);
		}

		@media screen and (max-width: 600px) {
			display: none;
		}
	}
	/* .stat.patch,
	.stat.stat-cs,
	.stat.timeago {
		@media screen and (min-width: 600px) and (max-width: 800px) {
			display: none;
		}
	} */
	.stat.timeago {
		text-transform: capitalize;
	}
	.stat.stat-cs {
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
			@media screen and (max-width: 800px) {
				--size: 60;
			}
		}

		.noHighlight & {
			gap: 0.25rem;

			:global(.champ-img) {
				--size: 60;
			}
		}

		.player {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}
	}
	.player-champ-container {
		position: relative;

		:global(.player-img) {
			--size: 28;
			position: absolute;
			bottom: 0;
			right: 0;
			background: var(--c1);
			z-index: 1;
		}
	}
	.champ-img {
		.noHighlight .highlight & {
			box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--blue-light);
		}
	}
	.highlight :global(.champ-img) {
		box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--blue-light);
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
			color: var(--blue-light);
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
