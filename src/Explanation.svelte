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
</style>
