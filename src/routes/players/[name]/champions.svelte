<script context="module">
	export const load = async ({ params }) => {
		return { props: { name: params.name } };
	};
</script>

<script>
  import { store, pageBackground } from '$lib/stores';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import FavoriteBtn from '$lib/components/FavoriteBtn.svelte';

  export let name;

	$: list = ($store.matches || [])
		.reduce((acc, curr) => {
			const team1 = curr.teams[0].players.map((player) => ({
				...player,
				winner: curr.teams[0].winner
			}));
			const team2 = curr.teams[1].players.map((player) => ({
				...player,
				winner: curr.teams[1].winner
			}));
			const players = [...team1, ...team2];

      const player = players.find(p => p.name === name);
      if (!player) return acc;

      const { kills, deaths, assists, gold, cs } = player;
      const win = player.winner ? 1 : 0;

      let champStats = acc[player.championIcon] || {
        kills: 0,
        deaths: 0,
        assists: 0,
        wins: 0,
        games: 0,
        gold: 0,
        cs: 0,
        lp: 0,
      };

      acc[player.championIcon] = {
        kills: kills + champStats.kills,
        deaths: deaths + champStats.deaths,
        assists: assists + champStats.assists,
        wins: win + champStats.wins,
        games: 1 + champStats.wins,
        gold: gold + champStats.gold,
        cs: cs + champStats.cs,
      }

			return acc;
		}, {});


    $: console.log('xxxxx list', list)
</script>

<svelte:head>
	<meta name="twitter:title" content={`${name} - Champions Queue`} />
	<title>{name} - Champions Queue</title>
</svelte:head>

<PageHeader title={name} player={name}>
	<div slot="controls">
		<FavoriteBtn />
	</div>
</PageHeader>