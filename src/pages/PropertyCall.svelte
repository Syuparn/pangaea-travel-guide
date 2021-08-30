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

            person.name.p
            person.greet
        `,
    // input
    ``
  );
</script>

<h1>Property Call</h1>
<p>
  You have already used property calls, specifing the property name and the
  arguments(if nesessary) after chain. This is used to refer the receiver's
  properties and call its methods.
</p>
