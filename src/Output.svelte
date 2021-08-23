<script lang="ts">
    export let text: string;
</script>

<div><pre class="codearea">{text}</pre></div>

<style>
    /* NOTE: allocate 1 line height when text is empty */
    .codearea::before {
        content: "";
        display: inline-block;
    }

    .codearea {
        background-color: #17262b;
        color: #c0d32b;
        font-family: 'Source Code Pro', monospace;
        text-align: left;
        padding: 0.5rem;
    }
</style>
