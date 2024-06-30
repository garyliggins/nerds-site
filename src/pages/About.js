import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
  return (
    <div className="about">
       <Helmet>
        <title> Nerds LA - About Us</title>
      </Helmet>
      <h1>About Us</h1>
      <p>Nerds is a nonprofit organization focused on getting kids from underserved neighborhoods into technology.</p>
      <img src="https://via.placeholder.com/600x400" alt="Placeholder" />
    </div>
  );
}

export default About;
