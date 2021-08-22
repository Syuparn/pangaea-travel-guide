<script lang="ts">
	import Header from "./Header.svelte"
	import * as pangaea from './pangaea/pangaea.js';

	function runScript() {
		const res = pangaea.run('"Hello, world!".p', '');
		alert(res.stdout);
	}
</script>

<main>
	<Header/>
	<button on:click={runScript}>Run</button>
</main>

<style>
	main {
		text-align: center;
		padding: 0em;
		max-width: 240px;
		margin: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>