<script lang="ts">
    import dedent from 'ts-dedent';
    import {pageLink} from "./pagelinkstore.js";
    import {code} from "./codestore.js";
    // HACK: reload current path and update page link store
    pageLink.reload()

    // update codearea
    code.insert(
        // source
        dedent`
            # print hello world
            "Hello, world!".p
        `,
        // input
        ``,
    )
</script>

<h1>1. Hello World</h1>
<p>
    Pangaea is an object-oriented language. Method <code>p</code> prints out itself.
    Lines starts with <code>#</code> are treated as comments.
</p>
