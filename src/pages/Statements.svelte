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
            fact := {|n|
              return 1 if n == 0 # early return
              n * fact(n - 1)
            }

            fact(10).p
        `,
    // input
    ``
  );
</script>

<h1>Statements</h1>
<p>
  You can use <span class="code">return</span> explicitly in the function.
  Combining to <span class="code">if</span>, you can use <i>early return</i>
  pattern. Early return prevents deep <span class="code">if</span> nests and keeps
  the main logic simple.
</p>
<h2>Practice</h2>
<p>
  (1) Raise a value error if a negative integer is passed to <span class="code"
    >fact</span
  >. You can raise a value error by
  <span class="code">raise ValueErr.new("msg")</span>
</p>
<p>
  (1) Raise an error if a non-integer object is passed to <span class="code"
    >fact</span
  >
  (<span class="code">TypeErr</span> is appropriate for wrong argument types).
</p>
