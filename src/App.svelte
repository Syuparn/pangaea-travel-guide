<script lang="ts">
	import Codearea from "./Codearea.svelte";
	import Explanation from "./Explanation.svelte";
	import Header from "./Header.svelte"
	import * as pangaea from './pangaea/pangaea.js';

	function runScript() {
		const res = pangaea.run('"Hello, world!".p', '');
		alert(res.stdout);
	}
</script>

<main>
	<Header></Header>
	<div class="flex">
		<Explanation></Explanation>
		<Codearea></Codearea>
	</div>
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

		.flex {
			display: flex;
		}
	}
</style>