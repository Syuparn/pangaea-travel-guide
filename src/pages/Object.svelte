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
            language := {name: "Pangaea", bornIn: 2020, features: {dynamic?: true}}
            language.name.p
            # use indexing
            language['bornIn].p
        `,
        // input
        ``,
    )
</script>

<h1>Object</h1>
<p>
    Objects consist of pairs of <strong>names</strong> and <strong>properties</strong> (or props in short).
    Objects can contain any type of props.
</p>
<p>
    Props can be referred by dot chain <code>.</code>.
    You can also use indexing <code>[]</code> with symbols (<code>'foo</code>) or strings.
</p>
<h2>Practice</h2>
<p>
    Print property <code>dynamic?</code>.
</p>
