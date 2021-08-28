<script lang="ts">
    import {pageLink} from "./pagelinkstore.js";
    // HACK: reload current path and update page link store
    pageLink.reload()
</script>

<h1>1. Hello World</h1>
<p>
    Hello!
</p>

<style>
    h1 {
        font-size: 1.2em;
    }
</style>
