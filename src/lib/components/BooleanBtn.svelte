<script>
	export let text = 'BOOLEAN TEXT HERE';
	export let checked;
	export let id;
	export let onclick;
</script>

<label class:checked for={id}>
	<span>{text}</span>
	<input type="checkbox" bind:checked {id} />
</label>

<style lang="scss">
	label {
		all: unset;
		box-sizing: border-box;
		position: relative;
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 1rem;
		height: var(--btn-height);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		background: var(--c2);
		border: 1px solid var(--c3);
	}
	input[type='checkbox'] {
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
		opacity: 0;
		visibility: hidden;
	}
</style>
