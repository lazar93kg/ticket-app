import { useContext } from "react";
import { AppContext } from "../App";
import TicketItem from "./TicketItem";

const PageTickets = () => {
  const appContext = useContext(AppContext);

  const cart = appContext.cart;

  return (
    <>
      <h2>Tickets</h2>
      <article className="ticket-receipt-box">
        {cart.map((item) => {
          return (
            <TicketItem key={item.name} item={item} />
          );
        })}
      </article>
    </>
  );
};

export default PageTickets;