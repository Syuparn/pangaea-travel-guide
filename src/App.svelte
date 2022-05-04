<script lang="ts">
  import {Router, Route} from 'svelte-routing';

  import Codearea from './Codearea.svelte';
  import Explanation from './Explanation.svelte';
  import Header from './Header.svelte';

  import IntroductionPage from './pages/Introduction.svelte';
  import HelloWorldPage from './pages/HelloWorld.svelte';
  import ObjectsPage from './pages/Objects.svelte';
  import FunctionPage from './pages/Function.svelte';
  import PolymorphismPage from './pages/Polymorphism.svelte';
  import FunctionArgumentPage from './pages/FunctionArgument.svelte';
  import ObjectPage from './pages/Object.svelte';
  import MethodsPage from './pages/Methods.svelte';
  import ArrayPage from './pages/Array.svelte';
  import CallExpressionsPage from './pages/CallExpressions.svelte';
  import PropertyCallPage from './pages/PropertyCall.svelte';
  import LiteralCallPage from './pages/LiteralCall.svelte';
  import VariableCallPage from './pages/VariableCall.svelte';
  import ChainsPage from './pages/Chains.svelte';
  import ListChainPage from './pages/ListChain.svelte';
  import ReduceChainPage from './pages/ReduceChain.svelte';
  import AdditionalChainsPage from './pages/AdditionalChains.svelte';
  import ObjectSystemPage from './pages/ObjectSystem.svelte';
  import InheritancePage from './pages/Inheritance.svelte';
  import ConstructorsPage from './pages/Constructors.svelte';
  import IfPage from './pages/If.svelte';
  import StatementsPage from './pages/Statements.svelte';
  import InputPage from './pages/Input.svelte';
  import CSVPage from './pages/CSV.svelte';
  import ExploreProps from './pages/ExploreProps.svelte';
  import CongratulationsPage from './pages/Congratulations.svelte';

  import {BASEPATH} from './consts.js';
</script>

<Router basepath={BASEPATH}>
  <main>
    <Header />
    <div class="flex">
      <Explanation>
        <Route path="" component={IntroductionPage} />
        <Route path="helloworld" component={HelloWorldPage} />
        <Route path="objects" component={ObjectsPage} />
        <Route path="function" component={FunctionPage} />
        <Route path="polymorphism" component={PolymorphismPage} />
        <Route path="function-argument" component={FunctionArgumentPage} />
        <Route path="object" component={ObjectPage} />
        <Route path="methods" component={MethodsPage} />
        <Route path="array" component={ArrayPage} />
        <Route path="call-expressions" component={CallExpressionsPage} />
        <Route path="property-call" component={PropertyCallPage} />
        <Route path="literal-call" component={LiteralCallPage} />
        <Route path="variable-call" component={VariableCallPage} />
        <Route path="chains" component={ChainsPage} />
        <Route path="list-chain" component={ListChainPage} />
        <Route path="reduce-chain" component={ReduceChainPage} />
        <Route path="additional-chains" component={AdditionalChainsPage} />
        <Route path="object-system" component={ObjectSystemPage} />
        <Route path="inheritance" component={InheritancePage} />
        <Route path="constructors" component={ConstructorsPage} />
        <Route path="if" component={IfPage} />
        <Route path="statements" component={StatementsPage} />
        <Route path="input" component={InputPage} />
        <Route path="csv" component={CSVPage} />
        <Route path="explore-props" component={ExploreProps} />
        <Route path="congratulations" component={CongratulationsPage} />
      </Explanation>
      <Codearea />
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
