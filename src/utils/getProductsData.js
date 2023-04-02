import { sortByTypeTitleDesc } from './sortArray';

export function getProductCountForVendor(products) {
  const vendorProducts = {};
  const vendors = [];

  products
    .map((el) => {
      return el.vendor;
    })
    .forEach(function (i) {
      vendorProducts[i] = (vendorProducts[i] || 0) + 1;
    });

  for (let key in vendorProducts) {
    vendors.push({ title: key, productCount: vendorProducts[key] });
  }

  return vendors;
}

export function getProductsTypeFilters(products) {
  const flags = [];
  products
    .map((el) => {
      return el.flags;
    })
    .forEach((el) => {
      el.forEach((string) => {
        flags.push(string);
      });
    });

  return [...new Set(flags)].sort(sortByTypeTitleDesc);
}

export function getProductsMaxPrice(products) {
  const prices = [];
  products.forEach((el) => {
    prices.push(+el.price);
  });

  return prices.sort((a, b) => b - a)[0];
}

export function getProductsMinPrice(products) {
  const prices = [];
  products.forEach((el) => {
    prices.push(+el.price);
  });

  return prices.sort((a, b) => a - b)[0];
}
