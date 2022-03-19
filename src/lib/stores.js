import { writable, derived } from 'svelte/store';
import { browser } from '$app/env';

export const store = writable({ loading: true });
export const matchModal = writable(null);
export const searchModal = writable(false);
export const pageBackground = writable(null);
export const favorites = writable(
	browser && (localStorage.getItem('favorites') || JSON.stringify({}))
);
favorites.subscribe((val) => browser && localStorage.setItem('favorites', JSON.stringify(val)));
