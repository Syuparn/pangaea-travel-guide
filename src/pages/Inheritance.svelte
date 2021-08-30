<script lang="ts">
  import dedent from 'ts-dedent';
  import {pageLink} from './pagelinkstore.js';
  import {code} from './codestore.js';
  // HACK: reload current path and update page link store
  pageLink.reload();

  // update codearea
  code.insert(
    // source
    dedent`
            parent := {
              _name: "parent", # used for repr method
              hello: m{"I'm #{._name}!".p},
            }
            child := parent.bear({_name: "child", young?: true})
            child.proto.repr.p
            # call its own property
            child.young?.p
            # call prototype(parent)'s property
            child.hello
        `,
    // input
    ``
  );
</script>

<h1>Inheritance</h1>
<p>
  As object literals inherit some prototypes, you can make inherited objects.
  Method <span class="code">bear</span> creates a new object which inherits the receiver.
</p>
<h2>Practice</h2>
<p>
  (1) Print ancestors of <span class="code">child</span>.
</p>
<p>
  (2) Check whose property is called in <span class="code">child</span>'s
  property call. (ex: <span class="code">young?</span>,
  <span class="code">hello</span>, <span class="code">_name</span>)
</p>
