<script lang="ts">
    import {pageLink} from "./pagelinkstore.js";
    import {code} from "./codestore.js";
    // HACK: reload current path and update page link store
    pageLink.reload()

    // update codearea
    code.insert(
        // source
        `"Hello, world!".p`,
        // input
        ``,
    )
</script>

<h1>1. Hello World</h1>
<p>
    Hello!
</p>
