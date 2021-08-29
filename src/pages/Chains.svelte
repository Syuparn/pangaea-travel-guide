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
            # dot chain (.)
            3.p
            # list chain (@)
            [1, 2, 3]@p
            # reduce chain ($)
            [1, 2, 3]$+.p
        `,
        // input
        ``,
    )
</script>

<h1>Chains</h1>
<p>
    Chains are important concepts of Pangaea.
    They are expansion of <span class="code">.</span> in object-oriented languages,
    which shows how to treat left-side value in call expressions.
</p>
