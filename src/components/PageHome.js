import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const PageHome = () => {
  return (
    <Link to="/events">
    <section className='mainpage'>
    <img className='mainlogo' src={logo} alt={"logo"} />
    <h2>Where it's @</h2>
    <h4>Ticketing made easy</h4>
</section>
</Link>
  );
};

export default PageHome;