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
            # lonely chain
            nil&.uc.p

            # thoughtful chain
            6~.{|n| n / 0}.p

            # strict chain
            (1:10)=@{|i| i if i.even?}.p
            # cf: without strict chain
            (1:10)@{|i| i if i.even?}.p
        `,
    // input
    ``
  );
</script>

<h1>Additional Chains</h1>
<p>
  Additional context can be prepended by main chain context. There are 3 kinds
  of additional chain context(<span class="code">&</span>,
  <span class="code">~</span>, <span class="code">=</span>).
</p>
<h2>Lonely Chain <span class="code">&</span></h2>
<p>
  If lonely chain's receiver is <span class="code">nil</span>, it ignores call
  and return <span class="code">nil</span>.
</p>
<h2>Thoughtful Chain <span class="code">~</span></h2>
<p>
  If the evaluated value is <span class="code">nil</span> or an error is raised,
  this chain returns receiver instead.
</p>
<h2>Strict Chain <span class="code">=</span></h2>
<p>
  In list context, evaluated <span class="code">nil</span> elements are removed implicitly.
  With Strict Chain, you can keep them remained.
</p>
<h2>Practice</h2>
<p>(1) What happens if you remove the lonely chain in the source code?</p>
<p>(1) What happens if you remove the thoughtful chain in the source code?</p>
