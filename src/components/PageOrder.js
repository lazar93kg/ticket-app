import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import CartItem from "./CartItem";


const PageOrder = () => {
  const appContext = useContext(AppContext);
  const cart = appContext.cart;

  // Cart Total
  let cartTotal = 0;
  cart.forEach((item) => {
    cartTotal += (item.price * item.quantity);
  });

  return (
    <section className="order-page">
      <h2>Order</h2>
      <Link to="../events"><i className="arrow left"></i></Link>
      {cart.map((item) => {
        return (
          <CartItem key={item.name} item={item} />
        );
      })}
      <div className="checkout-total">
        <i>Totalt värde på order</i>
        <h3>{cartTotal} sek</h3>
        <Link to="../tickets">
          <button className="btn">Skicka order</button>
        </Link>
      </div>
    </section>
  );
};

export default PageOrder;