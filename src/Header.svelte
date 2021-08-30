<script lang="ts">
  import {Link} from 'svelte-routing';
  import LinkButton from './LinkButton.svelte';
  import {pageLink} from './pages/pagelinkstore.js';

  let src = './logo.svg';
</script>

<header>
  <Link to=""><img id="logo" {src} alt="Pangaea Travel Guide" /></Link>
  <LinkButton link={$pageLink.back().page()} text="back" />
  <LinkButton link={$pageLink.next().page()} text="next" />
</header>

<style>
  header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: left;
    margin: 0 auto;
    margin-bottom: 0.5em;
    background-color: #2e4d55;
  }

  #logo {
    margin-top: 1em;
    margin-bottom: 0.8em;
    margin-left: 2em;
    width: 250px;
  }
</style>
