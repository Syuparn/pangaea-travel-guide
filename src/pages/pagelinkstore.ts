import {writable} from 'svelte/store';
import {currentPage} from './pagelinks.js';

function createPageLink() {
  const {subscribe, set} = writable(currentPage());
  return {
    subscribe,
    // reload the current path (currentPage relies on location.pathname)
    reload: () => set(currentPage()),
  };
}

export const pageLink = createPageLink();
