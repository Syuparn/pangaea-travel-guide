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
            ("even" if 3.even? else "odd").p
            # without else, nil is returned if condition is false
            ("even" if 3.even?).p

            (1:10)@{\\ if .even?}.p

            # B converts object into boolean
            "".B.p
            nil.B.p
            3.B.p
        `,
    // input
    ``
  );
</script>

<h1>If expression</h1>
<p>
  Pangaea does not have if statement. Instead, you can use if expression. If
  expression without else is evaluated as <span class="code">nil</span> if
  condition is falsy. This can be used as filter for list chains (note that
  <span class="code">nil</span> elements are eliminated by list chains!).
</p>
<p>
  In the condition clause, the object is converted into a boolean implicitly. As
  far as built-in objects, zero values like <span class="code">""</span> or
  <span class="code">[]</span>
  are converted into <span class="code">false</span> (<i>falsy values</i>).
</p>
