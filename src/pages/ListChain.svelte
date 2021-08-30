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
            # equivalent to [1.even?, 2.even?, 3.even?].p
            [1, 2, 3]@even?.p

            "abc"@{|c| [c, .uc]}.p
            # return object instead of array
            "abc"@({}){|c| [c, .uc]}.p
        `,
    // input
    ``
  );
</script>

<h1>List Chain</h1>
<p>
  In dot chain, the receiver is its left-side value. On the other hand, in list
  chain, the receiver is <strong>each element of</strong> its right-side value iterator.
  Once the all elements are evaluated, list chain packs them into an array.
</p>
<p>
  If you want to make objects other than an array, you can use <i>chain arg</i> to
  specify the object type.
</p>
<h2>Practice</h2>
<p>
  (1) In the last line of the source code, print a map instead of an object.
</p>
<p>
  (2) Almost all built-in objects have their iterators. Check What is printed
  when you use <span class="code">@p</span> for some objects (ex:
  <span class="code">5</span>,
  <span class="code">&#123;a: 1, b: 2&#125;</span>,
  <span class="code">%&#123;"a": 1, "b": 2&#125;</span>,
  <span class="code">(1:10:2)</span>, ).
</p>
