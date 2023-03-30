const checkTheBasket = (itemBarcode) => {
  const localCart = JSON.parse(localStorage.getItem('cart'));

  if (localCart) {
    const productInTheBasket = localCart.find(
      (el) => el.barcode === itemBarcode
    );

    if (productInTheBasket) {
      return false;
    } else if (!productInTheBasket) {
      return true;
    }
  } else {
    return true;
  }
};

export default checkTheBasket;
