<script lang="ts">
    export let text: string;
    export let href: string;
</script>

<p><a href={href}>{text}</a></p>

<style>
    p {
        border-width: 0;
        border-radius: 0.3em;
        padding: 0.4em;
        margin-left: 4em;
        background-color: #17262b;
    }

    p:hover {
        background-color: #c0d32b;
    }

    p:hover a {
        background-color: #c0d32b;
        color: #17262b;
    }

    a {
        color: #c0d32b;
        font-size: 1.1em;
    }

    a:hover {
	    text-decoration: none;
    }
</style>

