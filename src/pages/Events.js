import React from 'react';
import './Events.css';
import { Helmet } from 'react-helmet-async';
const Events = () => {
  return (
    <div className="events">
      <Helmet>
        <title>
          Nerds LA - Events
        </title>
      </Helmet>
      <h1>Upcoming Events</h1>
      <p>Check back soon for updates on our upcoming events!</p>
      <img src="https://via.placeholder.com/600x400" alt="Placeholder" />
    </div>
  );
}

export default Events;
