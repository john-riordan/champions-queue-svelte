<script>
	export let rank;
</script>

<div
	class="rank"
	class:rank1={rank === 1}
	class:rank2={rank === 2}
	class:rank3={rank === 3}
	class:top5={rank === 4 || rank === 5}
	class:top10={rank <= 10}
>
	<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M11.2744 21L2 14V6L15 12.6206V36.25L8.49666 31.5L12.25 31.75L3.5 24.5V17.25L11.2744 21ZM19 17.5H29V36.25L24.0152 42L19 36.25V17.5ZM46 6L33 12.6206V36.25L39.507 31.5L35.75 31.75L44 24.5V17.25L36.9326 21L46 14V6Z"
		/>
	</svg>

	<span>{rank}</span>
</div>

<style lang="scss">
	.rank {
		--r1: var(--c5);
		--r2: var(--c5);
		--s: 36px;
		position: relative;
		display: inline-flex;

		svg {
			display: none;
			position: absolute;
			top: 50%;
			left: 50%;
			width: var(--s);
			transform: translate(-50%, -50%);
			fill: var(--r1);
		}

		span {
			position: relative;
			padding: 1px 4px 3px 5px;
			background: linear-gradient(to bottom right, var(--r1), var(--r2));
			color: var(--c1);
			line-height: 1;
			font-weight: 900;
			border-radius: 2px;
			font-size: 0.875rem;
		}

		&.rank1,
		&.rank2,
		&.rank3,
		&.top5,
		&.top10 {
			svg {
				display: block;
			}
		}
		&.rank1,
		&.rank2,
		&.rank3,
		&.top5,
		&.top10 {
			span {
				font-size: 1rem;
				box-shadow: 0 0 0 3px var(--c2);
			}
		}
		&.top10 {
			--s: 38px;
		}
		&.top5 {
			--r1: var(--c7);
			--r2: var(--c7);
			--s: 38px;

			@media screen and (max-width: 800px) {
				--s: 32px;
			}
		}
		&.rank3 {
			--r1: hsl(34deg 68% 36%);
			--r2: hsl(34deg 80% 30%);
			--s: 42px;

			@media screen and (max-width: 800px) {
				--s: 32px;
			}
		}
		&.rank2 {
			--r1: hsl(0deg 0% 85%);
			--r2: hsl(0deg 0% 70%);
			--s: 40px;

			@media screen and (max-width: 800px) {
				--s: 36px;
			}
		}
		&.rank1 {
			--r1: hsl(47deg 80% 55%);
			--r2: hsl(47deg 80% 35%);
			--s: 48px;

			@media screen and (max-width: 800px) {
				--s: 40px;
			}
		}
	}
</style>
