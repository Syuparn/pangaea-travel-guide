// NOTE: `Go` is initialized by wasm_exec.js
const go = new Go();

// run wasm
// https://raw.githubusercontent.com/Syuparn/Pangaea/gh-pages/main.wasm
fetch("./main.wasm").then(response => 
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, go.importObject)
).then(obj => {
  go.run(obj.instance);
});
