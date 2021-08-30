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
            apply := {|a, b, f| f(a, b)}
            apply(1, 2) {|a, b| (a + b).p}
        `,
    // input
    ``
  );
</script>

<h1>Function Arguments</h1>
<p>
  You can write trailing function literal arguments outside the parentheses.
  This may help you to write higher-order functions.
</p>
