<script context="module">
	export const load = async () => {
		return { props: { title: 'Teams' } };
	};
</script>

<script>
	import { store } from '$lib/stores';
	import { TEAMS, TEAMS_WORLDS, teamImg } from '$lib/constants';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import Select from '$lib/components/Select.svelte';
	import CheckChecked from '$lib/components/icons/CheckChecked.svelte';
	import CheckUnchecked from '$lib/components/icons/CheckUnchecked.svelte';

	export let title;
	let selectedPlayers = 'all';
	let teamSort = 'games';
	let worldsOnly = true;

	$: players = $store.players || {};
	$: teams = Object.entries($store.teams || {})
		.filter(([tag]) => {
			return worldsOnly ? TEAMS_WORLDS[tag] : true;
		})
		.map(([tag, team]) => {
			const teamInfo = TEAMS[tag];
			const teamMainRoster = (teamInfo.starters || []).reduce((acc, curr) => {
				acc[curr] = true;
				return acc;
			}, {});
			const teamAcademyRoster = Object.keys(team.players).reduce((acc, curr) => {
				if (!teamMainRoster[curr]) acc[curr] = true;
				return acc;
			}, {});

			const playersToRender =
				selectedPlayers === 'main'
					? Object.keys(teamMainRoster)
					: selectedPlayers === 'academy'
					? Object.keys(teamAcademyRoster)
					: Object.keys({ ...teamMainRoster, ...teamAcademyRoster });

			const teamPlayers = playersToRender.map((playerName) => {
				const playerStats = players[playerName] || { name: playerName, lp: 0, wins: 0, games: 0 };
				return playerStats;
			});

			const teamLP = teamPlayers.reduce((acc, curr) => {
				const playerLP = $store.leaderboard?.[curr.name]?.lp ?? 0;
				acc += playerLP;
				return acc;
			}, 0);

			const teamGames = teamPlayers.reduce((acc, curr) => {
				acc += curr.games;
				return acc;
			}, 0);

			return {
				...team,
				tag,
				name: teamInfo.name,
				logo: teamInfo.logo,
				hsl: teamInfo.hsl,
				lp: teamLP,
				games: teamGames,
				players: teamPlayers
					.map((player) => ({
						...player,
						lp: $store.leaderboard?.[player.name]?.lp ?? 0
					}))
					.sort((a, b) => b[teamSort] - a[teamSort] || b.games - a.games)
			};
		})
		.sort((a, b) => b[teamSort] - a[teamSort]);

	function setSort(event) {
		teamSort = event.detail;
	}
</script>

<svelte:head>
	<meta name="twitter:title" content={`Teams - Champions Queue`} />
	<title>Teams - NA Champions Queue</title>
</svelte:head>

<PageHeader {title} center />

<!-- <div class="controls">
	<div class="button-group">
		<button class:active={selectedPlayers === 'all'} on:click={() => (selectedPlayers = 'all')}>
			All Players
		</button>
		<button class:active={selectedPlayers === 'main'} on:click={() => (selectedPlayers = 'main')}>
			Only Main Roster
		</button>
		<button
			class:active={selectedPlayers === 'academy'}
			on:click={() => (selectedPlayers = 'academy')}
		>
			Only Academy Roster
		</button>
	</div>

	<Select
		defaultText="Sort Teams by:"
		value={teamSort}
		options={[{
			value: 'lp',
			text: 'Sort Teams by: LP'
		},
		{
			value: 'games',
			text: 'Sort Teams by: Games Played'
		}]}
		on:select={setSort}
	/>
</div> -->

<div class="controls">
	<label class="boolean-btn" class:checked={worldsOnly} for="hide-low">
		<span>Only Worlds Teams</span>
		<input type="checkbox" bind:checked={worldsOnly} id="hide-low" />
		{#if worldsOnly}
			<CheckChecked />
		{:else}
			<CheckUnchecked />
		{/if}
	</label>
	<Select
		defaultText="Sort Teams by:"
		value={teamSort}
		options={[
			{
				value: 'lp',
				text: 'Sort Teams by: LP'
			},
			{
				value: 'games',
				text: 'Sort Teams by: Games Played'
			}
		]}
		on:select={setSort}
	/>
</div>

<ol class="teams-list">
	{#each teams as team (team.name)}
		<li class="team" style="--team-hsl: {team.hsl}">
			<a href={`/teams/${team.name}`} class="team-header">
				<img
					src={teamImg(250, team.logo)}
					alt={team.name}
					class="team-img--backdrop"
					loading="lazy"
				/>
				<img src={teamImg(80, team.logo)} alt={team.name} width="80" height="80" class="team-img" />
				<div class="team-info">
					<h3 class="team-name">{team.name}</h3>
					<div class="team-stats">
						<span>
							<span class="key">LP:</span>
							<span class="value">{team.lp}</span>
						</span>
						<span>
							<span class="key">Games:</span>
							<span class="value">{team.games}</span>
						</span>
					</div>
				</div>
			</a>
			<div class="team-inner">
				<span class="sort">
					<span class="player-name">Name</span>
					<span class="stat lp">LP</span>
					<span class="stat games">Games</span>
					<span class="stat wl">W/L</span>
				</span>
				<ol class="players">
					{#each team.players as player}
						<li>
							<a
								class="player"
								href={`/players/${player.name}`}
								class:hasntPlayed={player.games === 0}
							>
								<span class="player-info">
									<PlayerImg name={player.name} />
									<span class="player-name lg">{player.name}</span>
								</span>
								<span class="stat lp">{player.lp}</span>
								<span class="stat games">{player.games}</span>
								<span class="stat wl">{player.wins} / {player.games - player.wins}</span>
							</a>
						</li>
					{/each}
				</ol>
			</div>
		</li>
	{/each}
</ol>

<style lang="scss">
	.teams-list {
		--padd: 1rem;
		--player-height: 2.75rem;
		--num-players: 5;
		--accent-color: var(--c3);

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;

		@media screen and (max-width: 1750px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media screen and (max-width: 1250px) {
			--padd: 0.5rem;
			gap: 1rem;
		}
		@media screen and (max-width: 1100px) {
			grid-template-columns: 1fr;
		}
	}
	.team {
		background: var(--c2);
	}
	.team-header {
		position: relative;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: var(--padd);

		border: 2px solid var(--accent-color);
		border-left: none;
		border-bottom: none;
		box-shadow: inset 2px 0 0 hsla(var(--team-hsl) / 1);
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				to right,
				hsla(var(--team-hsl) / 0.1),
				hsla(var(--team-hsl) / 0.05)
			);
			opacity: 0.5;
			transition: opacity var(--transition);
		}

		> * {
			position: relative;
		}

		&:hover {
			&::before {
				opacity: 1;
			}
		}
	}
	.team-stats {
		display: flex;
		align-items: center;
		gap: 1.5rem;

		.key {
			opacity: 0.75;
		}
		.value {
			font-weight: 900;
			font-size: 1.125rem;
		}
	}
	.team-img {
		max-width: 80px;
		aspect-ratio: 1;

		@media screen and (max-width: 600px) {
			max-width: 60px;
		}
	}
	.team-img--backdrop {
		position: absolute;
		right: -10%;
		width: 200px;
		filter: grayscale(1);
		opacity: 0.05;
	}
	.team-name {
		font-size: 2.5rem;
		line-height: 1;
		white-space: nowrap;

		@media screen and (min-width: 1750px) {
			max-width: 22ch;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		@media screen and (max-width: 600px) {
			width: 10rem;
			font-size: 1.25rem;
		}
	}
	.team-inner {
		padding: var(--padd);
		padding-bottom: 0;
		border: 2px solid var(--accent-color);
		border-left: none;
		border-top: none;
		box-shadow: inset 2px 0 0 hsla(var(--team-hsl) / 0.5);
	}
	.players {
		height: calc((var(--num-players) * var(--player-height)) + (var(--player-height) / 2));
		padding-bottom: 0.5rem;
		padding-right: var(--padd);
		overflow-y: scroll;

		&::-webkit-scrollbar-thumb {
			background: var(--c4);
		}
		&::-webkit-scrollbar {
			width: 0.25rem;
		}

		@media screen and (max-width: 1100px) {
			height: auto;
		}
	}

	.player,
	.sort {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 var(--padd);
	}

	.sort {
		padding-top: 0.175rem;
		padding-bottom: 0.175rem;
		margin-bottom: 0.5rem;
		margin-right: var(--padd);
		font-weight: 900;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.player {
		gap: 0.5rem;
		padding: 0 var(--padd);
		height: var(--player-height);
		transition: background var(--transition);

		:global(.player-img) {
			--size: 32;

			@media screen and (max-width: 600px) {
				--size: 24;
			}
		}

		&.hasntPlayed {
			opacity: 0.5;
			filter: grayscale(1);
		}

		&:hover {
			background: var(--c3);
		}

		.stat {
			color: var(--c9);
		}
	}

	.stat {
		width: 4rem;
		text-align: center;
	}
	.stat.games {
		@media screen and (max-width: 600px) {
			display: none;
		}
	}

	.player-info {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.player-name {
		width: 7rem;
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		.sort & {
			margin-left: 2.5rem;
		}

		&.lg {
			font-size: 1.5rem;
		}

		@media screen and (max-width: 600px) {
			width: 5rem;
			font-size: 0.875rem;
		}
	}
</style>
