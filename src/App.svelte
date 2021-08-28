<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Codearea from "./Codearea.svelte";
    import Explanation from "./Explanation.svelte";
    import Header from "./Header.svelte";
    import IntroductionPage from "./pages/Introduction.svelte";
    import HelloWorldPage from "./pages/HelloWorld.svelte";
	import {BASEPATH} from "./consts.js";
</script>

<Router basepath="{BASEPATH}">
    <main>
        <Header></Header>
        <div class="flex">
            <Explanation>
                <Route path="" component={IntroductionPage} />
                <Route path="helloworld" component={HelloWorldPage} />
            </Explanation>
            <Codearea></Codearea>
        </div>
    </main>
</Router>

<style>
    main {
        text-align: center;
        padding: 0em;
        max-width: 240px;
        margin: 0;
    }

    .flex {
        /* NOTE: nesessary to avoid header */
        padding-top: 4em;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }

        .flex {
            display: flex;
            justify-content: flex-start;
        }
    }
</style>