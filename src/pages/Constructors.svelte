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
            Person := {
              new: _init('name, 'age), # _init is a wrapper of bear
              hello: m{"I'm #{.name}!".p},
            }

            #                  name    age
            taro := Person.new("Taro", 22)
            jiro := Person.new("Jiro", 19)
            taro.hello
            jiro.name.p
        `,
    // input
    ``
  );
</script>

<h1>Constructors</h1>
<p>
  <span class="code">bear</span> is powerful, but it is a little buggy to create
  many children expected to have specific properties. Function
  <span class="code">_init</span>
  is suitable for the situation.
  <span class="code">_init</span> creates a constructor, which generate inherited
  objects with properties passed from the arguments.
</p>
<h2>Practice</h2>
<p>
  Add method <span class="code">canDrink?</span> to
  <span class="code">Person</span>
  so that you can check whether Taro and Jiro can drink. (They live in Japan and
  cannot drink before 20 years old!)
</p>
