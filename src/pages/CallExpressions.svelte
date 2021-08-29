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
            # property call
            6.p

            # literal call
            6.{|obj| obj.p}

            # variable call
            print := {|obj| obj.p}
            6.^print
        `,
        // input
        ``,
    )
</script>

<h1>Call Expressions</h1>
<p>
    Pangaea has 3 ways to call expressions; <i>property call</i>, <i>literal call</i> and <i>variable call</i>.
</p>
