<script lang="ts">
	import Codearea from "./Codearea.svelte";
	import Explanation from "./Explanation.svelte";
	import Header from "./Header.svelte";

	const code = {
		source: `"Hello, world!".p`,
    	input: "abc",
    	output: ""
	};
</script>

<main>
	<Header></Header>
	<div class="flex">
		<Explanation></Explanation>
		<Codearea {...code}></Codearea>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 0em;
		max-width: 240px;
		margin: 0;
	}

	.flex {
		/* NOTE: nesessary to avoid header */
		padding-top: 4em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}

		.flex {
			display: flex;
			justify-content: flex-start;
		}
	}
</style>