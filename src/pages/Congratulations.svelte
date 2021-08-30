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
            <>.S@ord@{158 - \\}@chr$+.p
        `,
    // input
    dedent`
            [/07,=*)2=*5/0+}
        `
  );
</script>

<h1>Congratulations!</h1>
<p>You finished all sections🎉</p>
<p>
  You are ready to start Pangaea language. Let's check the <a
    href="https://github.com/Syuparn/Pangaea/releases">binary release page</a
  >. For further language specifications, see
  <a href="https://github.com/Syuparn/Pangaea/tree/master/docs/reference"
    >the language reference</a
  >.
</p>
<p>
  Thank you for playing the travel guide. <strong
    >Pangaea is waiting for you!</strong
  >
</p>
