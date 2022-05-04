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
            comment := {|score|
              score.case(%{
                100: "Perfect!!!",
                (70:100): "Great!",
                Int: "Nice Try!",
                Obj: "validation error...",
              })
            }

            comment(100).p
            comment(80).p
            comment(50).p
            comment("abc").p
        `,
    // input
    ``
  );
</script>

<h1>Case</h1>
<p>
  When control flow gets complicated, case will help you.
  It is similar to switch statement in other languages but more powerful.
</p>
<h2>Practice</h2>
<p>
  Case matching rules are defined by <span class="code">asFor?</span> method
  (<a href="https://github.com/Syuparn/Pangaea/blob/master/docs/reference/operators.md#equal--vs-topic-equal-">see details</a>).
  Implement custom <span class="code">asFor?</span> method for objects.
</p>
