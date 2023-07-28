import { useContext } from "react";
import { addToCart, removeFromCart } from "../utils/cart-utils";
import { AppContext } from "../App";


const CartItem = (props) => {
  const appContext = useContext(AppContext);

  // Quantity of tickets
  const cart = appContext.cart;
  const eventSingle = props.item;
  const name = eventSingle.name;
  const cartItem = eventSingle;
  let quantity = 0;
  if (cartItem.quantity > 0) {
    quantity = cartItem.quantity;
  }

  // Add To Cart
  const handleClickPlus = (e) => {
    appContext.setCart(addToCart(cart, eventSingle));
  };

  // Remove from Cart
  const handleClickMinus = (e) => {
    if (quantity > 0) {
      appContext.setCart(removeFromCart(cart, name));
    }
  };

  return (
    <article className="orders">
      <h4>{eventSingle.name}</h4>
      <p>{eventSingle.when.date} kl {eventSingle.when.to} - {eventSingle.when.to}</p>
      <div className="orders-menu">
        <button className="order-btn-left" onClick={handleClickMinus}>-</button>
        <p>{quantity}</p>
        <button className="order-btn-right" onClick={handleClickPlus}>+ </button>
      </div>
    </article>
  );
};

export default CartItem;