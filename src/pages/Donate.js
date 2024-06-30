import React from 'react';
import './Donate.css';
import { Helmet } from 'react-helmet-async';

const Donate = () => {
  return (
    <div className="donate">
        <Helmet>
        <title>
          Nerds LA - Donate
        </title>
      </Helmet>
      <h1>Donate</h1>
      <p>Your contributions help us bring technology education to more kids. Thank you for your support!</p>
      <img src="https://via.placeholder.com/600x400" alt="Placeholder" />
    </div>
  );
}

export default Donate;
