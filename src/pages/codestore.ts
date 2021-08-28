import { writable } from 'svelte/store';
import { run } from "../pangaea/pangaea.js";

type Code = {
  source: string,
  input: string,
  output: string,
};

function createCode() {
  const { subscribe, set, update } = writable<Code>({
    source: '',
    input: '',
    output: '',
  });
  return {
    subscribe,
    insert: (source: string, input: string) => set({source, input, output: ''}),
    run: () => update(({source, input}) => ({source, input, output: run(source, input)}))
  }
}

export const code = createCode();
