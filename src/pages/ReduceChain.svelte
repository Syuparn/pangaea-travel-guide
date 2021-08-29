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
            # equivalent to ((10 + 20) + 30).p
            [10, 20, 30]$+.p

            # initial accumulated value: []
            "abc"\$([]){|acc, i| acc + [i.uc]}.p
        `,
        // input
        ``,
    )
</script>

<h1>Reduce Chain</h1>
<p>
    In Reduce Chain, the receiver is <strong>an accumulated value and each element of left-side value iterator</strong>.
    In other words, you can reduce the elements of the left-side values.
</p>
<p>
    Inital value of the accumulated value can be specified as <i>chain arg</i>.
    If chain arg is not specified, <span class="code">nil</span> is used instead.
</p>
<h2>Practice</h2>
<p>
    Print the factorial of 10 (<span class="code">10!</span>). How short can you write?
</p>
