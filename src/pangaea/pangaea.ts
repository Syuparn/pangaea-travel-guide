type PangaeaResult = {
  "res": string,
  "stdout": string,
  "errmsg": string
}

export function run(src: string, stdin: string):PangaeaResult {
  // NOTE: global object `pangaea` is created by main.wasm
  const result = pangaea.execute(src, stdin);
  return {
    "res": result.res,
    "stdout": result.stdout,
    "errmsg": result.errmsg
  }
}
