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
            # NOTE: use repr to prettify the output, otherwise all props are printed out!
            [1, 2].proto.repr.p
            # all prototype chains
            true.ancestors.repr.p

            # prototype chain (o does not have method A but can use it)
            o := {a: 1, b: 2}
            o.A.p
            # check whose A is called above
            o.which('A).repr.p
        `,
        // input
        ``,
    )
</script>

<h1>Object System</h1>
<p>
    Pangaea has prototype-based object system.
    Int literals inherits <span class="code">Int</span> object,
    which inherits <span class="code">Obj</span> object,
    and all objects inherits <span class="code">BaseObj</span> object.
</p>
<p>
    Prototype of objects can be obtained by method <span class="code">proto</span>.
    Also, method <span class="code">ancestors</span> returns all prototype chains. 
</p>
<p>
    Property call uses prototype chain.
    Even if the object does not have the specified property,
    it can also use its prototype's properties.
    With method <span class="code">which</span>, you can check whose property is called.
</p>
<h2>Practice</h2>
<p>
    (1) Print ancestors of <span class="code">"abc"</span>.
</p>
<p>
    (2) What is the prototype of <span class="code">o</span>?
</p>
<p>
    (3) List up properties of <span class="code">Int</span>.
    Property names can be obtained by method <span class="code">keys</span>.
</p>
