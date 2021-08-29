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
            # read first line
            <>.S.{"1: #{\\}"}.p
            # read second line
            <>.S.{"2: #{\\}"}.p
            # read the rest at once
            <>.A.{"rest: #{\\}"}.p
        `,
        // input
        dedent`
            one
            two
            three
            four
            five
        `,
    )
</script>

<h1>Input</h1>
<p>
    <span class="code">&#60;&#62;</span> (or <i>diamond</i>) reads stdin.
    This produces each line of stdin like iterators.
    With method <span class="code">S</span>, you can read each line one by one.
    With method <span class="code">A</span> and list chain, you can read the rest of lines at once.
</p>
<h2>Practice</h2>
<p>
    After all lines have been read, what does <span class="code">&#60;&#62;.S</span> and <span class="code">&#60;&#62;.A</span> return?
</p>
