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
            # all properties of Str (with private ones)
            Str.keys(private?: true).p
        `,
    // input
    ``
  );
</script>
  
<h1>How to explore properties</h1>
<p>
  You can explore object's properties (especially methods) by method
  <span class="code">keys</span>.
</p>
<p>
  <span class="code">private?: true</span> is nesseccary to explore special methods
  like <span class="code">_iter</span> and <span class="code">+</span>.
</p>
<h2>Practice</h2>
<p>
  Make string <span class="code">"abc"</span> uppercase. What method can you use?
</p>
