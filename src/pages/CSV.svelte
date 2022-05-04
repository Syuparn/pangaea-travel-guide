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
            # print total price
            <>.A[1:]@split(sep:?,)@{\\[1].I * \\[2].I}$+.p
        `,
    // input
    dedent`
            name,unit_price,amount
            apple,100,5
            banana,150,4
            orange,50,20
        `
  );
</script>

<h1>Hanle CSV files</h1>
<p>
  With <i>diamond</i> and list chains, you can handle CSV files easily.
</p>
<h2>Practice</h2>
<p>
  Count sum of all amount of fruits.
</p>
