import App from './App.svelte';
// read wasm and initialize Pangaea interpreter
import './pangaea/init_pangaea.js';

const app = new App({
  target: document.body,
  props: {},
});

export default app;
