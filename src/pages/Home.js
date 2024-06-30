import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
     <Helmet>
      <title>
        Nerds LA - Home
      </title>
     </Helmet>
      {/* <h1>Welcome to Nerds</h1> */}
      <div className="logo-home">
          <Link to="/"><img src="images/Nerds-LA-logo.PNG" alt="Logo" /></Link>
        </div>
      <p>Empowering kids from underserved neighborhoods through technology.</p>
      <img src="https://via.placeholder.com/600x400" alt="Placeholder" />
    </div>
  );
}

export default Home;
