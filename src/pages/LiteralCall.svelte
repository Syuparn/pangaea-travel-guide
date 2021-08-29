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
            # equivalent to {|n| n * 2}(10).p
            10.{|n| n * 2}.p
            # multiple literal calls
            12.{|n| n // 3}.{|n| "fizz" if n == 0 else n}.p

            # each element of the array is assigned to the each parameter
            [1, 2, 3].{|a, b, c| a * 100 + b * 10 + c}.p
        `,
        // input
        ``,
    )
</script>

<h1>Literal Call</h1>
<p>
    Literal Call is like a <i>pipeline</i> in functional programming languages.
    This call the trailing function literal with one argument, the receiver.
</p>
<p>
    If its receiver is an array and the function has more than one parameter,
    each element of the array is assigned to the each parameter.
</p>
<h2>Practice</h2>
<p>
    In functions, 1st parameter can be referred as <span class="code">\</span>.
    For that reason, <span class="code">&#123;|i| i + 1&#125;</span> can be replaced with
    <span class="code">&#123;\ + 1&#125;</span>.
    Let's use <span class="code">\</span> and make the source code shorter!
    (in Pangaea, the shorter, the better!).
</p>
