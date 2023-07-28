import { useContext } from "react";
import { Link } from "react-router-dom";
import { addToCart, getSingleCartItem, removeFromCart } from "../utils/cart-utils";
import { AppContext } from "../App";


const PageEventSingle = () => {
  const appContext = useContext(AppContext);

  const eventSinglePage = appContext.eventSinglePage;
  const cart = appContext.cart;

  let jsx = null;

  // Respond single event or null
  if (eventSinglePage && eventSinglePage !== null) {

    const eventSingle = eventSinglePage;
    const name = eventSingle.name;
    const cartItem = getSingleCartItem(cart, name);
    let quantity = 0;

    if (cartItem.quantity > 0) {
      quantity = cartItem.quantity;
    }

    const handleClickPlus = (e) => {
      appContext.setCart(addToCart(cart, eventSingle));
    };

    const handleClickMinus = (e) => {
      if (quantity > 0) {
        appContext.setCart(removeFromCart(cart, name));
      }
    };

    jsx = (
      <>
        <p>You are about to score some ticket to</p>
        <article className="order-box">
          <h1>{eventSingle.name}</h1>
          <span>{eventSingle.when.date} kl {eventSingle.when.from} - {eventSingle.when.to}</span>
          <p>@{eventSingle.where}</p>
          <div className="event">
            <div>
              <h3>{eventSingle.price} sek</h3>
            </div>
            <div className="event-menu">
              <button className="order-btn-left" onClick={handleClickMinus} >-</button>
              <p>{quantity}</p>
              <button className="order-btn-right" onClick={handleClickPlus} >+</button>
            </div>
          </div>
          <Link to="../order">
            <button disabled={quantity === 0} className="btn">Lägg i varukorgen</button>
          </Link>
        </article>
      </>
    );
  }
  return (
    <section className="order-page" >
      <div>
        <Link to="/events"><i className="arrow left"></i></Link>
        <h2>Event</h2>
        {jsx}
      </div>
    </section>
  );
};

export default PageEventSingle;