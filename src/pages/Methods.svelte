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
            person := {
              name: "Taro",
              greet: m{|to: "Hanako"| "Hello, #{to}. I'm #{self.name}!".p},
            }

            person.greet(to: "Jiro")
            # parentheses can be omitted if no arguments are passed
            person.greet
            # obtain method itself
            person['greet].p
        `,
    // input
    ``
  );
</script>

<h1>Methods</h1>
<p>
  Objects can contain method props (<span class="code">m&#123||&#125</span>).
  Method can be used like ordinary functions, but the receiver is set to the 1st
  argument. The receiver can be referred as 1st parameter
  <span class="code">self</span>.
</p>
<p>
  Parentheses of method call can be omitted if no arguments other than the
  receiver are passed.
</p>
<p>If you want to get the method object itself, use indexing instead.</p>
<h2>Practice</h2>
<p>
  When you refer props of 1st parameter of the function, you can omit its
  receiver (<i>anon chain</i>: <span class="code">&#123|x| .a&#125</span> is
  equivalent to <span class="code">&#123|x| x.a&#125</span>). Let's remove
  verbose <span class="code">self</span> in the source code!
</p>
