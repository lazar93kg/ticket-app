export const getSingleCartItem = (cart, name) => {

  let cartItem = false;
  cart.forEach((item) => {
    if (item.name === name) {
      cartItem = item;
    }
  });
  return cartItem;
};


export const addToCart = (cart, newCartItem) => {
  let alreadyAdded = false;
  const name = newCartItem.name;
  cart.forEach((item) => {
    // Duplicate found
    if (item.name === name) {
      alreadyAdded = true;
    }
  });
  if (alreadyAdded) {
    // Quantity + 1
    const updatedCart = cart.map((item) => {
      if (item.name === name) {
        const updatedCartitem = {
          ...item,
          quantity: item.quantity + 1
        }
        return updatedCartitem
      }
      return item;
    });
    return updatedCart;
  } else {
    const updatedCartitem = {
      ...newCartItem,
      quantity: 1
    }
    // add new item into cart array
    const updatedCart = [...cart, updatedCartitem];
    return updatedCart;
  }
};


export const removeFromCart = (cart, name) => {
  let updatedCart = [];
  cart.forEach((item) => {
    if (item.name === name) {
      if (item.quantity > 1) {
        const updatedCartitem = {
          ...item,
          quantity: item.quantity - 1
        }
        updatedCart.push(updatedCartitem); //
      } else if (item.quantity < 2) {
        // skip push... will be removed from cart
      }
    } else {
      // unchanged item
      updatedCart.push(item);
    }
  });
  return updatedCart;
};

