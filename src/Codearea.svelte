<div id="container">
    <p class="title">source code</p>
    <div class="codearea">
        "Hello, world!".p
    </div>
    <p class="title">input</p>
    <div class="codearea">
        hoge
    </div>
    <p class="title">output</p>
    <div class="codearea">
        Hello, world!
    </div>
</div>

<style>
    .title {
        color: white;
        text-align: left;
    }

    .codearea {
        background-color: #17262b;
        color: #c0d32b;
        font-family: 'Source Code Pro', monospace;
        text-align: left;
        padding: 0.5rem;
    }

    #container {
        margin: 1rem;
    }

    @media (min-width: 640px) {
		#container {
			flex: 1;
		}
	}
</style>
