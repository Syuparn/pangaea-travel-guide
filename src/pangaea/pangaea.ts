type PangaeaResult = {
  res: string;
  stdout: string;
  errmsg: string;
};

export function run(source: string, input: string): string {
  // NOTE: global object `pangaea` is created by main.wasm
  const res: PangaeaResult = pangaea.execute(source, input);
  if (res.errmsg !== '') {
    return res.errmsg;
  } else {
    return res.stdout;
  }
}
