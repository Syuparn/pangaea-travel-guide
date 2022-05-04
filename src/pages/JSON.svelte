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
            # extract .foo.bar in JSON input
            # NOTE: use .All instead of .A to read all lines as single str
            <>.All.decJSON.foo.bar.p
        `,
    // input
    dedent`
            {
              "foo": {
                "bar": "BAR",
                "baz": "BAZ"
              },
              "hoge": [1, 2, 3]
            }
        `
  );
</script>

<h1>Hanle JSON files</h1>
<p>
  You can also handle JSON input with <span class="code">Str#decJSON</span>.
</p>
<h2>Practice</h2>
<p>
  What object does <span class="code">Str#decJSON</span> return?
</p>
