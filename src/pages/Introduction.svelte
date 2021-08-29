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
            # you can see and edit source code here
            "Hello, world!".p
        `,
        // input
        `some input to read`,
    )
</script>

<h1>0. Introduction</h1>
<p>
    Welcome to <i>Pangaea Travel Guide!</i><br>
</p>
<p>
    This is a hands-on tutorial website for Pangaea programming language.
    You can edit <strong>source code</strong> and <strong>input</strong> area on the right side,
    and run them by <strong>run</strong> button.
    They are evaluated locally by the Pangaea interpreter written in WebAssembly.
</p>
<p>
    If you want to run your own codes freely,
    try <a href="https://syuparn.github.io/Pangaea/">Pangaea Playground</a> instead.
    Also, you can download a Pangaea binary from <a href="https://github.com/Syuparn/Pangaea">the language repository</a>.
</p>
