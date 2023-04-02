export function sortByTitleAsc(x, y) {
  if (x.brand < y.brand) {
    return -1;
  }
  if (x.brand > y.brand) {
    return 1;
  }
  return 0;
}

export function sortByTitleDesc(x, y) {
  if (x.brand < y.brand) {
    return 1;
  }
  if (x.brand > y.brand) {
    return -1;
  }
  return 0;
}

export function sortByPriceAsc(x, y) {
  if (+x.price < +y.price) {
    return -1;
  }
  if (+x.price > +y.price) {
    return 1;
  }
  return 0;
}

export function sortByPriceDesc(x, y) {
  if (+x.price < +y.price) {
    return 1;
  }
  if (+x.price > +y.price) {
    return -1;
  }
  return 0;
}

export function sortByTypeTitleDesc(x, y) {
  if (x < y) {
    return 1;
  }
  if (x > y) {
    return -1;
  }
  return 0;
}
