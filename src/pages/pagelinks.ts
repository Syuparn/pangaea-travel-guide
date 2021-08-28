import {BASEPATH} from "../consts.js";

const pages = [
  '',
  'helloworld',
];

class Page {
  constructor (private _page: string) {
  }

  next(): Page {
    const i = pages.indexOf(this._page);
    if (i === -1 || i === pages.length - 1) {
      return new Page('')
    }
    return new Page(pages[i+1]);
  }

  back(): Page {
    const i = pages.indexOf(this._page);
    if (i === -1 || i === 0) {
      return new Page('');
    }
    return new Page(pages[i-1]);
  }

  page(): string {
    return this._page;
  }
}

export function currentPage(): Page {
  const page = trimPrefix(location.pathname, BASEPATH);
  return new Page(page);
}

function trimPrefix(str: string, prefix: string): string {
  if (str.startsWith(prefix)) {
    return str.substr(prefix.length);
  }
  return str;
}
