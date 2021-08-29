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
            f := {|s| s[-1]}
            "abc".^f.p
        `,
        // input
        ``,
    )
</script>

<h1>Variable Call</h1>
<p>
    Variable call works similar to literal call, but it uses a variable.
</p>
<h2>Practice</h2>
<p>
    If you use a method object in variable call, what happens?
    Assign f to the object of string method <span class="code">uc</span> (<span class="code">Str['uc]</span>).
</p>
