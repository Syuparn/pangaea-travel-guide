<script lang="ts">
	import * as pangaea from './pangaea/pangaea.js';
	export let name: string;

	function runScript() {
		const res = pangaea.run('"Hello, world!".p', '');
		console.log(res.stdout);
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<button on:click={runScript}>Run</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>