<script lang="ts">
  import Input from './Input.svelte';
  import Output from './Output.svelte';
  import RunButton from './RunButton.svelte';
  import {code} from './pages/codestore.js';
</script>

<div id="container">
  <p class="title">source code</p>
  <Input rows={10} bind:text={$code.source} />
  <p class="title">input</p>
  <Input rows={1} bind:text={$code.input} />
  <p class="button-row"><RunButton on:click={code.run} /></p>
  <Output text={$code.output} />
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
