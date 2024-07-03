import React from 'react';
import './Resources.css';
import { Helmet } from 'react-helmet-async';
const Resources = () => {
  return (
    <div className="events">
      <Helmet>
        <title>
          Nerds LA - Resources
        </title>
      </Helmet>
      <h1>Resources Page</h1>
      <p>Check back soon for updates on resources!</p>
      <img src="https://via.placeholder.com/600x400" alt="Placeholder" />
    </div>
  );
}

export default Resources;