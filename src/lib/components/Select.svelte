<script>
	import { createEventDispatcher } from 'svelte';

	export let value;
	export let options;
	export let defaultText = 'Select an option...';
	export let position = 'left';

	const dispatch = createEventDispatcher();

	let open = false;

	$: selectedOption = options.find((o) => o.value === value);

	function toggleOpen() {
		open = !open;
	}
	function emitSelect(val) {
		if (selectedOption?.value === val) {
			dispatch('select', null);
			open = false;
		} else {
			dispatch('select', val);
			open = false;
		}
	}
</script>

<svelte:head>
	{#if open}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if open && options}
	<div class="backdrop" on:click={() => (open = false)} />
{/if}
<div class="container">
	<button on:click={toggleOpen} class="select-trigger">
		{#if selectedOption?.image}
			<img src={selectedOption.image} alt={selectedOption.text} />
		{/if}
		<span>{selectedOption?.text ?? defaultText}</span>
	</button>
	{#if open && options}
		<ul class="options" data-position={position}>
			{#each options as option}
				<li>
					<button
						class="option"
						class:selected={selectedOption?.value === option.value}
						on:click={(e) => emitSelect(option.value)}
					>
						{#if option.image}
							<img src={option.image} alt={option.text} />
						{/if}
						<span>{option.text}</span>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	.backdrop {
		position: fixed;
		inset: 0;
		background: var(--c1);
		opacity: 0.8;
		z-index: 2;
	}
	.container {
		position: relative;
		width: 100%;
	}
	.select-trigger {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		height: var(--btn-height);
		padding-right: 1.5rem;

		img {
			width: 1.5rem;
			height: auto;
		}
	}
	.options {
		position: absolute;
		top: 0;
		left: 0;
		padding: 0.5rem 0;
		background: var(--c1);
		border: 3px solid var(--c2);
		box-shadow: 0 0 30px 5px var(--c1);
		z-index: 2;

		&[data-position='right'] {
			left: unset;
			right: 0;
		}

		.option {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			gap: 1rem;
			padding: 0.5rem 1rem;
			padding-right: 1.5rem;
			width: 100%;
			white-space: nowrap;
			border: none;
			background: none;

			&:hover {
				background: var(--c2);
			}

			&.selected {
				background: var(--c3);
			}
		}
		img {
			width: 2.5rem;
			height: auto;
		}
	}
</style>
