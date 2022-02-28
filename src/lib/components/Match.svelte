<script>
	import RelativeTime from '@yaireo/relative-time';

	import ChampImg from '$lib/components/ChampImg.svelte';

	export let match;
	export let isChampion = false;

	const relativeTime = new RelativeTime();
	const dateRelative = relativeTime.from(new Date(match.matchStart));
	const stats = match.stats;
	const outcome = stats?.winner ? 'Victory' : 'Defeat';
</script>

<li class="match">
	{#if stats}
		<div class="info">
			<ChampImg name={stats.championIcon} size={60} --size={60} />
			<div class="match-stats">
				<div class="statline">
					<span class="stat outcome" class:victory={stats.winner}>{outcome}</span>
					<span class="stat timeago">{dateRelative}</span>
				</div>
				<div class="statline">
					{#if isChampion}
						<span class="stat-player">{stats.name}</span>
					{/if}
					<span class="stat">
						<span class="stat-prefix">KDA:</span>
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
					<span class="stat timeago">{dateRelative}</span>
				</div>
			</div>
		</div>
	{/if}
	<div class="champslist">
		<div class="champs">
			{#each match.teams[0].players as player}
				<div class:highlight={player.championIcon === stats?.championIcon}>
					<ChampImg name={player.championIcon} --size={36} />
				</div>
			{/each}
		</div>
		<div class="champs">
			{#each match.teams[1].players as player}
				<div class:highlight={player.championIcon === stats?.championIcon}>
					<ChampImg name={player.championIcon} --size={36} />
				</div>
			{/each}
		</div>
	</div>
</li>

<style>
	.match {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		font-weight: 400;
		letter-spacing: 1px;
		background: var(--c2);
	}
	.info {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}
	.match-stats {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.statline {
		display: flex;
		gap: 1.5rem;
	}
	.stat-prefix {
		color: var(--c4);
	}
	.outcome {
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: var(--red);
	}
	.stat-player {
		font-weight: 600;
	}
	.outcome.victory {
		color: var(--blue);
	}
	.champslist {
		display: flex;
		gap: 2rem;
	}
	.champs {
		display: flex;
		gap: 0.5rem;
	}
	.highlight {
		box-shadow: 0 0 0 2px var(--c2), 0 0 0 3px var(--yellow);
	}
</style>
