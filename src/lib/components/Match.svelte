<script>
	import RelativeTime from '@yaireo/relative-time';

	import { matchModal } from '$lib/stores';
	import ChampImg from '$lib/components/ChampImg.svelte';
	import { formatchPatch } from '$lib/helpers';

	export let match;
	export let champion;
	export let player;

	const relativeTime = new RelativeTime();
	const dateRelative = relativeTime.from(new Date(match.matchStart));

	$: t1 = match.teams[0].players.map((p) => ({ ...p, winner: match.teams[0].winner }));
	$: t2 = match.teams[1].players.map((p) => ({ ...p, winner: match.teams[1].winner }));
	$: teams = t1.concat(t2);
	$: stats = champion
		? teams.find((p) => p.championIcon === champion)
		: teams.find((p) => p.name === player);
	$: nonSpecificMatch = !champion && !player;
	$: outcome = stats?.winner ? 'Victory' : 'Defeat';
	$: patch = formatchPatch(match?.gameVersion);

	$: playerChampSize = nonSpecificMatch ? 52 : 32;

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
				<ChampImg name={stats.championIcon} size={56} --size={56} />
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
					<span class="stat">
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
			{#each match.teams[0].players as player}
				<div class="player">
					<div class:highlight={player.championIcon === stats?.championIcon}>
						<ChampImg name={player.championIcon} size={playerChampSize} --size={playerChampSize} />
					</div>
					{#if nonSpecificMatch}
						<span class="player-name">{player.name}</span>
					{/if}
				</div>
			{/each}
		</div>
		<div class="players">
			{#each match.teams[1].players as player}
				<div class="player">
					<div class:highlight={player.championIcon === stats?.championIcon}>
						<ChampImg name={player.championIcon} size={playerChampSize} --size={playerChampSize} />
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
		--transition: ease 0.15s;
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
	}
	.info .champ-container {
		box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--red);
	}
	.info .champ-container.victory {
		box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--blue);
	}
	.match-stats {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.statline {
		display: flex;
		gap: 1.5rem;
	}
	.stat-prefix {
		color: var(--c7);
	}
	.outcome {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: var(--red);
		transform: translate3d(0, 0, 0);
	}
	.patch {
		color: var(--c8);
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
	}
	.players {
		display: flex;
		gap: 0.75rem;

		.noHighlight & {
			gap: 0.25rem;
		}

		.player {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}
	}
	.highlight {
		box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--yellow);
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
	}
</style>
