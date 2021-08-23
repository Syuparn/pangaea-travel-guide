<script lang="ts">
    import Input from "./Input.svelte";
    import Output from "./Output.svelte";
    import RunButton from "./RunButton.svelte";
</script>

<div id="container">
    <p class="title">source code</p>
    <Input rows={5} text={`"Hello, world!".p`}></Input>
    <p class="title">input</p>
    <Input rows={2} text="abc"></Input>
    <p class="button-row"><RunButton></RunButton></p>
    <Output text=""></Output>
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
