<script>
	export let title = '';
</script>

<header class="pageHeader">
	<h1>{title}</h1>
</header>

<style>
	.pageHeader {
		position: sticky;
		display: flex;
		align-items: center;
		top: 0;
		height: 7rem;
		background: var(--app-bg);
		z-index: 1;
	}
	.pageHeader h1 {
		font-size: 2.5rem;
	}
</style>
