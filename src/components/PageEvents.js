import { useEffect, useState } from "react";
import EventItem from "./EventItem";


const PageEvents = () => {
  const [events, setEvents] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/majazocom/events/events")
      .then(response => response.json())
      .then(data => setEvents(data))
  }, []);

  // Filter events
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };
  const q = searchQuery.trim();

  const filteredEvents = events.filter((item) => {
    if (q === '') {
      // Ignoring search
      return true;
    } else {
      // Do search
      if (item.name.toUpperCase().includes(q.toUpperCase())) {
        return true;
      }
      return false;
    }
  });
  return (
    <section className="searchpage">
      <h2>Events</h2>
      <input
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={handleChange}
      />
      <section>
        {filteredEvents.map((item) => {
          return (
            <EventItem key={item.name} item={item} />
          );
        })}
      </section>
    </section>
  );
};

export default PageEvents;