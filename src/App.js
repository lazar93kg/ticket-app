import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageEvents from "./components/PageEvents";
import PageEventSingle from "./components/PageEventSingle";
import PageHome from "./components/PageHome";
import PageOrder from "./components/PageOrder";
import PageTickets from "./components/PageTickets";

export const AppContext = React.createContext(null);

const App = () => {
  // Single event 
  const [eventSinglePage, setEventSinglePage] = useState(null);
  // Cart
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{ eventSinglePage, cart, setEventSinglePage, setCart }}>
      <BrowserRouter>
      <section className="App">

        <Routes>
          <Route path="/events" element={<PageEvents />} />
          <Route path="/eventsingle" element={<PageEventSingle />} />
          <Route path="/order" element={<PageOrder />} />
          <Route path="/tickets" element={<PageTickets />} />
          <Route path="/" element={<PageHome />} />
        </Routes>

        <nav>
          <Link to="/">&bull;</Link><br />
          <Link to="/events">&bull;</Link><br />
          <Link to="/eventsingle">&bull;</Link><br />
          <Link to="/order"></Link><br />
          <Link to="/tickets"></Link><br />
        </nav>
        
      </section>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
