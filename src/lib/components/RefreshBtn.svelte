<script>
	import { store } from '$lib/stores';
	import { fetchData } from '$lib/helpers';
	import Refresh from '$lib/components/icons/Refresh.svelte';

	async function fetchNewData() {
		const data = $store;
		store.set({ ...data, loading: true });
		const newData = await fetchData();
		store.set({});
		store.set({ ...newData, loading: false });
	}
</script>

<button on:click={fetchNewData}>
	<Refresh />
	Refresh Data
</button>
