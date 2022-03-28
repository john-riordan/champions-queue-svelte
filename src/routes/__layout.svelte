<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { store, searchModal, pageBackground } from '$lib/stores';
	import { fetchData } from '$lib/helpers';
	import Players from '$lib/components/icons/Players.svelte';
	import Champions from '$lib/components/icons/Champions.svelte';
	import Matches from '$lib/components/icons/Matches.svelte';
	import Medal from '$lib/components/icons/Medal.svelte';
	import Search from '$lib/components/icons/Search.svelte';
	import Refresh from '$lib/components/icons/Refresh.svelte';
	import MatchModal from '$lib/components/MatchModal.svelte';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import FavoritesList from '$lib/components/FavoritesList.svelte';
	import '../app.css';

	onMount(async () => {
		const mountedData = await fetchData();
		store.set(mountedData);
	});

	$: currURL = $page.url.pathname;

	const routes = [
		{
			url: '/players',
			title: 'Players',
			icon: Players
		},
		{
			url: '/champions',
			title: 'Champions',
			icon: Champions
		},
		{
			url: '/matches',
			title: 'Matches',
			icon: Matches
		},
		{
			url: '/teams',
			title: 'Teams',
			icon: Medal
		}
	];
</script>

{#if $pageBackground}
	<img src={$pageBackground} class="background" loading="lazy" alt="background" />
{/if}
<div class="container">
	<div class="nav">
		<div class="top">
			<div class="logo">
				<a href="/">
					<img src="/logo.webp" width="124" alt="Champions Queue Logo" />
					<svg
						width="93"
						height="34"
						viewBox="0 0 93 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8.638 3.412h-1.79a2.198 2.198 0 0 0-.282-.773 2.086 2.086 0 0 0-1.211-.935 2.747 2.747 0 0 0-.838-.124c-.532 0-1.004.133-1.416.4-.412.262-.734.648-.967 1.157-.233.506-.349 1.125-.349 1.856 0 .743.116 1.37.35 1.88.235.506.558.888.966 1.148.412.256.882.384 1.412.384.293 0 .568-.038.823-.114.258-.079.49-.194.694-.346a2.105 2.105 0 0 0 .818-1.32l1.79.01a3.8 3.8 0 0 1-.436 1.3 3.84 3.84 0 0 1-.866 1.073 4.002 4.002 0 0 1-1.254.721c-.478.171-1.01.257-1.593.257-.862 0-1.63-.198-2.307-.594C1.506 8.998.973 8.427.584 7.68.194 6.932 0 6.037 0 4.993 0 3.946.196 3.05.589 2.307.98 1.56 1.515.989 2.192.593 2.868.198 3.634 0 4.489 0c.545 0 1.053.076 1.522.228.469.152.886.375 1.253.669.367.291.669.649.905 1.073.24.42.395.901.469 1.442Zm2.973 6.44V.133h1.776v4.116h4.541V.133h1.78v9.72h-1.78v-4.13h-4.541v4.13H11.61Zm10.74 0h1.894l.81-2.396h3.686l.811 2.397h1.896L27.992.133h-2.191l-3.45 9.72Zm5.91-3.81-1.326-3.916h-.077l-1.324 3.916h2.727Zm5.825-5.91h2.173l2.91 7.044h.114l2.91-7.043h2.172v9.72h-1.703V3.175h-.091l-2.709 6.65H38.59L35.881 3.16h-.091v6.692h-1.704V.133Zm13.56 0v9.72h1.776V6.57h1.875c.757 0 1.393-.138 1.91-.413.517-.279.907-.66 1.172-1.144.265-.484.398-1.038.398-1.661 0-.617-.133-1.168-.398-1.652A2.794 2.794 0 0 0 53.216.551c-.51-.279-1.142-.418-1.895-.418h-3.675Zm1.776 4.989h1.636c.44 0 .8-.076 1.082-.228.28-.152.488-.36.622-.626.137-.266.206-.571.206-.916a1.94 1.94 0 0 0-.206-.912 1.393 1.393 0 0 0-.627-.612c-.28-.148-.643-.223-1.086-.223h-1.627v3.517ZM59.442.133v9.72h-1.776V.133h1.776Zm11.434 7.55c.395-.746.593-1.643.593-2.69s-.198-1.943-.593-2.686c-.393-.747-.929-1.318-1.608-1.714C68.59.198 67.824 0 66.966 0c-.858 0-1.627.198-2.306.593-.677.396-1.213.967-1.608 1.714-.393.743-.59 1.639-.59 2.686 0 1.044.197 1.94.59 2.686.395.744.931 1.315 1.607 1.713.68.396 1.449.594 2.307.594.858 0 1.626-.198 2.302-.594.68-.395 1.215-.965 1.608-1.708Zm-1.541-4.555c.233.506.35 1.128.35 1.865 0 .737-.117 1.36-.35 1.87-.23.506-.549.89-.957 1.153-.409.26-.88.39-1.412.39-.533 0-1.003-.13-1.412-.39-.408-.262-.729-.647-.962-1.153-.23-.51-.344-1.133-.344-1.87 0-.737.115-1.36.344-1.865.233-.51.554-.894.962-1.154a2.553 2.553 0 0 1 1.412-.394c.533 0 1.003.132 1.412.394.408.26.727.644.957 1.154ZM82.549.133v9.72H80.97l-4.618-6.62h-.081v6.62h-1.776V.133h1.59l4.612 6.625h.086V.133h1.766Zm8.044 1.704c.332.23.52.553.565.968h1.708a2.518 2.518 0 0 0-.464-1.452c-.3-.424-.713-.755-1.24-.992C90.64.12 90.03 0 89.334 0c-.686 0-1.3.12-1.842.36-.542.238-.972.572-1.287 1.002-.313.43-.47.932-.47 1.505 0 .696.234 1.254.7 1.675.468.418 1.106.73 1.913.935l1.115.285c.352.088.658.19.92.304.264.11.47.25.617.417a.925.925 0 0 1 .225.627 1.163 1.163 0 0 1-.254.73 1.644 1.644 0 0 1-.69.485c-.29.114-.628.17-1.014.17-.37 0-.705-.055-1.005-.166a1.671 1.671 0 0 1-.722-.503c-.185-.224-.29-.506-.316-.845h-1.747c.026.646.195 1.193.507 1.643.316.449.753.79 1.312 1.025.561.234 1.223.351 1.986.351.785 0 1.453-.12 2.005-.36.555-.244.98-.581 1.273-1.012.293-.433.44-.935.44-1.504 0-.42-.08-.788-.24-1.101a2.446 2.446 0 0 0-.65-.802 3.767 3.767 0 0 0-.924-.55 6.366 6.366 0 0 0-1.067-.347l-.919-.228a5.852 5.852 0 0 1-.598-.176 2.743 2.743 0 0 1-.54-.256 1.264 1.264 0 0 1-.388-.38.976.976 0 0 1-.139-.527 1.09 1.09 0 0 1 .215-.65c.14-.19.343-.34.608-.45.265-.111.582-.167.952-.167.527 0 .954.116 1.283.347ZM6.973 25.506h3.765l.876 1.101c.128-.21.24-.44.335-.691.285-.738.427-1.642.427-2.711 0-1.07-.142-1.97-.427-2.702-.279-.738-.694-1.296-1.246-1.673-.546-.384-1.22-.575-2.022-.575-.802 0-1.48.191-2.031.575-.546.377-.962.935-1.246 1.673-.28.732-.419 1.633-.419 2.702 0 1.07.14 1.973.419 2.71.284.733.7 1.29 1.246 1.674.552.378 1.229.566 2.03.566.098 0 .193-.002.287-.008l-1.995-2.641Zm9.23 2.728a8.136 8.136 0 0 1-1.518 1.942l2.711 3.278h-4.288l-1.343-1.563a9.62 9.62 0 0 1-3.084.483c-1.627 0-3.097-.352-4.41-1.055-1.308-.709-2.348-1.743-3.12-3.103C.382 26.851 0 25.18 0 23.205c0-1.987.383-3.66 1.15-5.02.773-1.366 1.813-2.397 3.12-3.094 1.314-.703 2.784-1.055 4.41-1.055 1.616 0 3.08.352 4.393 1.055 1.313.697 2.356 1.728 3.13 3.094.772 1.36 1.158 3.033 1.158 5.02 0 1.987-.386 3.663-1.159 5.029ZM32.644 14.28h4.846v11.435c0 1.36-.326 2.536-.977 3.53-.645.988-1.545 1.752-2.701 2.292-1.157.535-2.499.802-4.027.802-1.54 0-2.888-.267-4.044-.802-1.156-.54-2.057-1.304-2.702-2.292-.639-.994-.958-2.17-.958-3.53V14.28h4.845v11.017c0 .552.122 1.046.366 1.481.245.43.582.767 1.011 1.011.436.244.93.366 1.482.366.558 0 1.052-.122 1.482-.366a2.64 2.64 0 0 0 1.01-1.01 2.98 2.98 0 0 0 .367-1.482V14.28Zm22.467 0H42.248v17.85h12.83v-3.905h-7.984v-3.068h7.356v-3.904h-7.356v-3.068h8.018V14.28Zm15.42 0h4.847v11.435c0 1.36-.326 2.536-.977 3.53-.645.988-1.545 1.752-2.701 2.292-1.157.535-2.499.802-4.027.802-1.54 0-2.888-.267-4.044-.802-1.156-.54-2.057-1.304-2.702-2.292-.639-.994-.958-2.17-.958-3.53V14.28h4.845v11.017c0 .552.122 1.046.366 1.481.245.43.582.767 1.011 1.011.436.244.93.366 1.482.366.558 0 1.052-.122 1.482-.366a2.64 2.64 0 0 0 1.01-1.01 2.98 2.98 0 0 0 .367-1.482V14.28Zm22.468 0H80.136v17.85h12.83v-3.905h-7.984v-3.068h7.356v-3.904h-7.356v-3.068H93V14.28Z"
						/>
					</svg>
				</a>
			</div>
			<nav>
				{#each routes as route}
					<a href={route.url} class="nav-item" class:active={currURL.startsWith(route.url)}>
						<div>
							<svelte:component this={route.icon} />
							<span class="text">{route.title}</span>
						</div>
					</a>
				{/each}
			</nav>
			<div class="search-btn nav-item" on:click={() => searchModal.set(true)}>
				<span>
					<Search />
					<span class="text">Search</span>
				</span>
			</div>
		</div>

		<div class="bottom">
			<FavoritesList />
		</div>
	</div>
	<section class="content">
		<div class="content-container">
			<slot />
		</div>
		<footer>
			<p>
				championsqueue.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of
				Riot Games or anyone officially involved in producing or managing League of Legends.
			</p>
			<p>
				League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
				<a href="https://www.leagueoflegends.com">League of Legends</a> ©
				<a href="https://www.riotgames.com">Riot Games, Inc.</a>
			</p>
		</footer>
		{#if $store.loading && currURL !== '/'}
			<div class="loading">
				<Refresh />
			</div>
		{/if}
	</section>
</div>

<MatchModal />
<SearchModal />

<style lang="scss">
	.nav {
		box-sizing: border-box;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		width: var(--nav-width);
		padding-right: 0;
		z-index: 1;

		> .active {
			background: var(--c3);
			border-color: var(--c4);
		}
	}

	.logo {
		position: relative;
		padding: 3em;
		padding-bottom: 2rem;

		@media screen and (max-width: 1000px) {
			padding: 2rem 2rem 2rem 1rem;
		}
		@media screen and (max-width: 800px) {
			padding: 2rem 1rem 1rem 0.5rem;
		}
		@media screen and (max-width: 600px) {
			padding-top: 1rem;
		}

		img {
			aspect-ratio: 124 / 119;
		}

		svg {
			width: 8rem;
			height: auto;
			margin-top: -2rem;
			filter: drop-shadow(0 0 10px black);

			@media screen and (max-width: 1000px) {
				display: none;
			}
		}
	}

	.nav-item {
		position: relative;
		display: flex;
		align-items: center;
		padding: 1rem 0 1rem var(--nav-indent);
		text-transform: uppercase;
		transition: box-shadow var(--transition);
		cursor: pointer;

		> * {
			position: relative;
			display: flex;
			align-items: center;
			gap: 0.75rem;
			opacity: 0.35;
			transition: opacity var(--transition), transform var(--transition);
		}

		.text {
			@media screen and (max-width: 1000px) {
				display: none;
			}
		}

		&:hover {
			> * {
				opacity: 0.75;
				transform: translateX(5%);
			}
		}
	}

	.top {
		display: flex;
		flex-direction: column;
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 1px;

		a {
			&::before,
			&::after {
				content: '';
				position: absolute;
				inset: 0;
				opacity: 0;
				transition: opacity var(--transition);
			}
			&::before {
				background: linear-gradient(
					to right,
					hsla(var(--logo-hsl) / 0.2),
					hsla(var(--logo-hsl) / 0.05) 50%,
					transparent 95%
				);
			}
			&::after {
				width: 75%;
				box-shadow: inset 0 1px 0 0 hsla(var(--logo-hsl) / 0.75),
					inset 0 -1px 0 0 hsla(var(--logo-hsl) / 0.75);
				pointer-events: none;
				-webkit-mask-image: linear-gradient(to right, black, transparent);
			}

			&.active {
				box-shadow: inset 0.25rem 0 0 0 var(--logo);

				> div {
					opacity: 1;
					transform: translateX(5%);
				}

				&::before {
					opacity: 1;
				}
				&::after {
					opacity: 0.75;
				}
			}
		}
	}

	.top :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
	}

	.content {
		position: relative;
		box-sizing: border-box;
		padding: var(--gap);
		padding-left: var(--nav-width);
		padding-right: var(--content-padding);
		padding-top: var(--content-padding);
		overflow: hidden;
	}
	.content-container {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		min-height: 100vh;
	}

	.bottom {
		padding: 0 2rem 2rem var(--nav-indent);

		@media screen and (max-width: 1000px) {
			padding-right: var(--nav-indent);
			padding-bottom: 1rem;
		}
	}

	.loading {
		position: fixed;
		inset: 0 0 0 var(--nav-width);
		display: grid;
		place-content: center;
		background-color: var(--c1);
		opacity: 0.75;

		:global(svg) {
			width: 3rem;
			height: 3rem;
			animation: loading-spin 0.5s ease-in forwards infinite;
		}
	}
	.background {
		position: absolute;
		top: -10%;
		left: calc(var(--nav-width) - 2rem);
		width: 500px;
		height: auto;
		opacity: 0.05;
		filter: saturate(0);

		@media screen and (max-width: 800px) {
			width: 300px;
		}
	}

	footer {
		text-align: center;
		margin-top: 7rem;
		padding-bottom: 3rem;
		color: var(--c8);

		a {
			text-decoration: underline;
			color: var(--c10);
		}
	}
</style>
