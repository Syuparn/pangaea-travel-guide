<script lang="ts">
    import {Link} from 'svelte-routing';

    export let text: string;
    export let link: string;
</script>

<Link to="{link}"><p>{text}</p></Link>

<style>
    p {
        border-width: 0;
        border-radius: 0.3em;
        padding: 0.4em;
        margin-left: 4em;
        background-color: #17262b;
        color: #c0d32b;
    }

    p:hover {
        background-color: #c0d32b;
        color: #17262b;
    }
</style>

