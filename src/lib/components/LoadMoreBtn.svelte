<script>
	export let block;
	export let onclick;

	function handleClick() {
		onclick();
	}
</script>

<button on:click={handleClick} class:block>Load More</button>
