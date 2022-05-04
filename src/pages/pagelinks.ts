import {BASEPATH} from '../consts.js';

// URL paths for each page (used in App.svelte to refer components)
const pages = [
  '',
  'helloworld',
  'objects',
  'function',
  'polymorphism',
  'function-argument',
  'object',
  'methods',
  'array',
  'call-expressions',
  'property-call',
  'literal-call',
  'variable-call',
  'chains',
  'list-chain',
  'reduce-chain',
  'additional-chains',
  'object-system',
  'inheritance',
  'constructors',
  'if',
  'statements',
  'case',
  'input',
  'csv',
  'json',
  'explore-props',
  'congratulations',
];

class Page {
  constructor(private _page: string) {}

  next(): Page {
    const i = pages.indexOf(this._page);
    if (i === -1 || i === pages.length - 1) {
      return new Page('');
    }
    return new Page(pages[i + 1]);
  }

  back(): Page {
    const i = pages.indexOf(this._page);
    if (i === -1) {
      return new Page('');
    }
    if (i === 0) {
      return new Page(pages[pages.length - 1]);
    }
    return new Page(pages[i - 1]);
  }

  page(): string {
    return this._page;
  }
}

export function currentPage(): Page {
  // NOTE: base path trimming and slash trimming must be separated
  //       so that link can work on both of basepathes `/foo` and `/foo/`
  const page = trimPrefix(trimPrefix(location.pathname, BASEPATH), '/');
  return new Page(page);
}

function trimPrefix(str: string, prefix: string): string {
  if (str.startsWith(prefix)) {
    return str.substr(prefix.length);
  }
  return str;
}
