const productData = require('../data/products.json');

export default function getAllProducts() {
  const localProducts = JSON.parse(localStorage.getItem('products'));

  if (!localProducts || localProducts.length < 1) {
    return productData.products;
  } else {
    return localProducts;
  }
}
