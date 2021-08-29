<div>
    <slot></slot>
</div>

<style>
    div {
        margin: 1rem;
        padding: 1rem;
        background-color: #404510;
        color: #dddddd;
        text-align: left; 
        line-height: 1.75em;
    }

    @media (min-width: 640px) {
        div {
            flex: 1;
        }
    }

    /* apply to all elements inside slot */
    div :global(h1) {
        font-size: 1.2em;
    }

    div :global(h2) {
        font-size: 1em;
    }

    div :global(a) {
        color: white;
        text-decoration: underline;
    }

    div :global(strong) {
        color: white;
    }

    div :global(i) {
        color: white;
    }

    /* 
        HACK: use .code class instead of code tag because it occurs wrong warning below
        "<span class="code"> will be treated as an HTML element unless it begins with a capital letter"   
    */
    div :global(.code) {
        background-color: #17262b;
        color: #c0d32b;
        font-family: 'Source Code Pro', monospace;
        padding: 0.1em;
        border-radius: 0.1em;
    }
</style>
