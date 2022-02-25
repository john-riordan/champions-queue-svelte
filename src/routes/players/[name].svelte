<script>
  import { page } from '$app/stores';

  import ChampImg from '$lib/components/ChampImg.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { store } from '$lib/stores';

  $: name = $page.params.name;
	$: matches = $store.matches || [];
  
	$: list = matches
		.filter(match => {
      const t1 = match.teams[0].players;
      const t2 = match.teams[1].players;
      const teams = t1.concat(t2).map(p => p.name);

      return teams.includes(name);
    }).map(match => {
      const t1 = match.teams[0].players.map((p) => ({ ...p, winner: match.teams[0].winner }));
      const t2 = match.teams[1].players.map((p) => ({ ...p, winner: match.teams[1].winner }));
      const teams = t1.concat(t2);
      const player = teams.find((p) => p.name === name);

      return ({
        ...match,
        victory: player.winner
      })
    });

    $: playerStats = ($store.players || []).find(p => p.name === name);
    $: console.log(playerStats)
</script>

<PageHeader title={name} />
{#if playerStats}
  <div class="statBlocks">
    <div class="statBlock">
      <h3 class="stat">{playerStats.lp.toLocaleString('en-us')}</h3>
      <span>LP</span>
    </div>
    <div class="statBlock">
      <h3 class="stat">{playerStats.games.toLocaleString('en-us')}</h3>
      <span>Games</span>
    </div>
    <div class="statBlock">
      <h3 class="stat">
        {(playerStats.wins / (playerStats.games || 1)).toLocaleString('en-us', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
          style: 'percent',
        })}
      </h3>
      <span>Win-Rate</span>
    </div>
    <div class="statBlock">
      <h3 class="stat">
        {((playerStats.kills + playerStats.assists) / (playerStats.deaths || 1)).toLocaleString(
          'en-us',
          {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          }
        )}
      </h3>
      <span>KDA</span>
    </div>
  </div>
{/if}
<ul class="matchlist">
	{#each list as match}
    <li class="match">
      <div class="champs">
        {#each match.teams[0].players as player}
          <div>
            <ChampImg name={player.championIcon} --size={40} />
          </div>
        {/each}
      </div>

      <div class="champs">
        {#each match.teams[1].players as player}
          <div>
            <ChampImg name={player.championIcon} --size={40} />
          </div>
        {/each}
      </div>
    </li>
	{/each}
</ul>

<style>
.statBlocks {
  display: flex;
  margin-bottom: 2rem;
  gap: 1rem;
}
.statBlock {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 2rem;
  background: var(--c2);
}
.statBlock .stat {
  font-size: 2.5rem;
}
.statBlock span {
  display: block;
  color: var(--c4);
  text-transform: uppercase;
  letter-spacing: 2px;
}
.matchlist {
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) / 3);
}
.match {
  display: flex;
  justify-content: space-between;
}

.matchlist li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  background: var(--c2);
}
.matchlist .champs {
  display: flex;
  gap: 0.25rem;
}
</style>