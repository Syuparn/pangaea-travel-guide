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
  // extract the last part of the current path
  const page = location.pathname.split('/').slice(-1)[0];
  if (page === undefined) { // no paths found
    return new Page('');
  }
  return new Page(page);
}
