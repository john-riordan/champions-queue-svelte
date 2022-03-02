<script>
	import { fade } from 'svelte/transition';
	export let url = '';
</script>

{#key url}
	<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
		<slot />
	</div>
{/key}
