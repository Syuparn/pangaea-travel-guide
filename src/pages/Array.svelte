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
            arr := ["zero", 1, {"two": 2}, [3, 4]]
            arr[0].p
            arr[1].p
            # range indexing
            arr[1:3].p
            arr[0:5:2].p
        `,
    // input
    ``
  );
</script>

<h1>Array</h1>
<p>
  Arrays can contain any objects. Their elements can be referred by indexing.
  Index starts with <span class="code">0</span>. You can also use ranges for
  indexing to get multiple elements.
</p>
<h2>Practice</h2>
<p>
  Print an array with the elements of <span class="code">arr</span> in reverse order.
  (Hint: you can use either of array methods or indexing!)
</p>
