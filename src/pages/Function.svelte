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
            add := {|a, b| a + b}
            add(1, 2).p # or add.call(1, 2).p

            # with keyword parameters
            hello := {|name: "Pangaea"| "Hello, #{name}!".p}
            hello()
            hello(name: "Ruby")
        `,
        // input
        ``,
    )
</script>

<h1>Function</h1>
<p>
    Function definition is simple; just assign a function literal to a variable.
    <code>return</code> is not nesessary because
    functions return the last statement evaluated in them.
</p>
<p>
    You can also use keyword parameters to set arguments' default values.
    Note that <code>name: </code> in the argument cannot be omitted because
    Pangaea distinguishes keyword arguments from positional ones.
</p>
<h2>Practice</h2>
<p>
    What happens if you pass too many or too few arguments to <code>add</code>?
</p>
