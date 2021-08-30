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
            # int
            123.p
            # float
            0.123.p
            # boolean
            true.p
            # string
            "hello".p
            # array
            [1, 2, 3].p
            # object
            {a: 1, b: 2}.p
            # map
            %{"a": 1, "b": 2}.p
            # range
            (1:10:2).p
            # function
            {|n| n + 1}.p
            # iterator
            <{|i| yield i; recur(i+1)}>.p
            # nil
            nil.p
        `,
    // input
    ``
  );
</script>

<h1>Objects</h1>
<p>
  In Pangaea, everything is object. These are object literals you can create
  directly.
</p>
