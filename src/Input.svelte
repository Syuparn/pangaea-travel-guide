<script lang="ts">
    export let rows: number;
    export let text: string;
</script>

<textarea rows="{rows}" cols="80" bind:value={text}></textarea>

<style>
    textarea {
        background-color: #17262b;
        color: #c0d32b;
        font-family: 'Source Code Pro', monospace;
        text-align: left;
        padding: 0.5rem;
        border: none;
    }
</style>
