<script context="module">
	export const load = async () => {
		return { props: { title: 'Players' } };
	};
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RefreshBtn from '$lib/components/RefreshBtn.svelte';
	import CheckChecked from '$lib/components/icons/CheckChecked.svelte';
	import CheckUnchecked from '$lib/components/icons/CheckUnchecked.svelte';
	import SortDirection from '$lib/components/SortDirection.svelte';
	import PlayerImg from '$lib/components/PlayerImg.svelte';
	import Select from '$lib/components/Select.svelte';
	import RankBadge from '$lib/components/RankBadge.svelte';
	import { store } from '$lib/stores';
	import { TEAMS, teamImg } from '$lib/constants';

	export let title;
	let search = '';
	let team = null;
	let sort = 'lp';
	let desc = true;
	let commonOnly = false;
	const champSize = 56;

	$: players = $store.players || [];
	$: totalGames = $store.totalGames || 1;
	$: list = players
		.filter((p) => {
			if (team) {
				return p.name.toLowerCase().startsWith(team.toLowerCase());
			}
			return p.name.toLowerCase().includes(search.toLowerCase());
		})
		.map((p) => ({ ...p, winrate: p.wins / p.games, kda: (p.kills + p.assists) / (p.deaths || 1) }))
		.sort((a, b) => (desc ? b[sort] - a[sort] : a[sort] - b[sort]))
		.filter((c) => (commonOnly ? c.games / totalGames > 0.02 : true));

	function setSort(col) {
		if (sort !== col) sort = col;
		else desc = !desc;
	}

	function setTeam(event) {
		team = event.detail;
		search = '';
	}

	const teamOptions = TEAMS.map((t) => ({
		value: t.tag,
		text: t.name,
		image: teamImg(70, t.logo)
	}));
</script>

<PageHeader {title}>
	<div slot="controls">
		<RefreshBtn />
	</div>
</PageHeader>

<div class="controls">
	<input
		type="text"
		class="search"
		class:disabled={team}
		placeholder="Search Players"
		bind:value={search}
	/>
	<label class="boolean-btn" class:checked={commonOnly} for="hide-low">
		<span>Hide Low Game-Count</span>
		<input type="checkbox" bind:checked={commonOnly} id="hide-low" />
		{#if commonOnly}
			<CheckChecked />
		{:else}
			<CheckUnchecked />
		{/if}
	</label>
	<Select defaultText="Select an LCS Team" value={team} options={teamOptions} on:select={setTeam} />
</div>

<div class="sort">
	<span class="nameSort">Name</span>
	<span class="stat" on:click={() => setSort('rank')}>
		Rank
		<SortDirection class={desc ? 'desc' : 'asc'} />
	</span>
	<span class="stat" on:click={() => setSort('lp')}>
		LP
		{#if sort === 'lp'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('kda')}>
		KDA
		{#if sort === 'kda'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat" on:click={() => setSort('winrate')}>
		Win-Rate
		{#if sort === 'winrate'}
			<SortDirection class={desc ? 'desc' : 'asc'} />
		{/if}
	</span>
	<span class="stat">W/L</span>
</div>

<ul class="list">
	{#each list as player}
		<li>
			<a href={`/players/${player.name}`}>
				<div class="info">
					<PlayerImg name={player.name} --size={champSize} size={champSize} />
					<p class="name">{player.name}</p>
				</div>

				<span class="stat">
					<RankBadge rank={player.rank} />
				</span>
				<span class="stat">
					{player.lp}
				</span>
				<span class="stat">
					{((player.kills + player.assists) / (player.deaths || 1)).toLocaleString('en-us', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat">
					{(player.wins / player.games).toLocaleString('en-us', {
						style: 'percent',
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}
				</span>
				<span class="stat">
					{player.wins} / {player.games - player.wins}
				</span>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	.list li a,
	.sort {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		letter-spacing: 1px;
		text-align: center;
		background: var(--c2);
	}

	.list li {
		font-size: 1.175rem;

		a {
			border-top: 2px solid var(--app-bg);
			border-bottom: 2px solid var(--app-bg);
		}
	}

	.list li a:hover {
		background: var(--c3);
	}

	.list .info {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.list .name {
		width: 15rem;
		font-weight: 700;
		text-align: left;
	}

	.stat {
		flex: 1;
	}

	.sort {
		background: transparent;
		font-weight: 700;
		font-size: 0.875rem;
		text-transform: uppercase;
		padding-bottom: 1rem;
		user-select: none;
	}
	.sort > * {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		cursor: pointer;
	}
	:global(.sort > * svg) {
		width: 1rem;
		height: 1rem;
	}
	.nameSort {
		justify-content: flex-start;
		width: 14rem;
		margin-left: 5.5rem;
	}
</style>
