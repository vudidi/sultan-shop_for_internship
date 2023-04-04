const checkTheBasket = (id) => {
  const localCart = JSON.parse(localStorage.getItem('cart'));

  if (localCart) {
    const productInTheBasket = localCart.find((el) => el.id === id);

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
