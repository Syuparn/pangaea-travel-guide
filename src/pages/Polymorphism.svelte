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
            double := {|x| x * 2}
            double(4).p
            double("abc").p
        `,
        // input
        ``,
    )
</script>

<h1>Polymorphism</h1>
<p>
    Since pangaea is dynamically typed, any object can be used as an argument.
</p>
<h2>Practice</h2>
<p>
    What <code>double</code> returns if you pass <code>[1,2,3]</code>?
</p>
