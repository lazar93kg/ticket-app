import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";


const EventItem = (props) => {
  const appContext = useContext(AppContext);
  const eventSingle = props.item;

  // Router navigate single event
  const navigate = useNavigate();

  // Use Context Single Event
  const handleClickOpenSigleEvent = (e) => {
    appContext.setEventSinglePage(eventSingle);
    navigate("/eventsingle");
  };
  return (
    <article className="event-card" onClick={handleClickOpenSigleEvent}>
      <div className="ec-date">
        <p>{eventSingle.when.date}</p>
      </div>
      <div className="ec-info">
        <h3>{eventSingle.name}</h3>
        <i>{eventSingle.where}</i>
        <p>{eventSingle.when.from}-{eventSingle.when.to} </p>
      </div>
      <b className="ec-price">{eventSingle.price} Sek</b>
    </article>
  );
};

export default EventItem;