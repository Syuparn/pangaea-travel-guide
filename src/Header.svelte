<script>
    import LinkButton from "./LinkButton.svelte";

    let src = './logo.svg';
</script>

<header>
    <img id="logo" src={src} alt="Pangaea Travel Guide"/>
    <LinkButton link="" text="back"></LinkButton>
    <LinkButton link="helloworld" text="next"></LinkButton>
</header>

<style>
    header {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: left;
        margin: 0 auto;
        margin-bottom: 0.5em;
        background-color: #2e4d55;
    }

    #logo {
        margin-top: 1em;
        margin-bottom: 0.8em;
        margin-left: 2em;
        width: 250px;
    }
</style>