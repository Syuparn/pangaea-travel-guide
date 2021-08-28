<script lang="ts">
    import Input from "./Input.svelte";
    import Output from "./Output.svelte";
    import RunButton from "./RunButton.svelte";
    import * as pangaea from "./pangaea/pangaea.js";

    export let source: string;
    export let input: string;
    export let output: string;

    function runScript() {
        const res = pangaea.run(source, input);
        if (res.errmsg !== '') {
            output = res.errmsg;
        } else {
            output = res.stdout;
        }
    }
</script>

<div id="container">
    <p class="title">source code</p>
    <Input rows={5} bind:text={source}></Input>
    <p class="title">input</p>
    <Input rows={2} bind:text={input}></Input>
    <p class="button-row"><RunButton on:click={runScript}></RunButton></p>
    <Output text={output}></Output>
</div>

<style>
    #container {
        margin: 0rem;
    }

    @media (min-width: 640px) {
        #container {
            flex: 1;
        }
    }

    .title {
        color: white;
        text-align: left;
    }

    .button-row {
        text-align: left;
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
