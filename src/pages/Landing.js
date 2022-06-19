import React from 'react';
import logo from '../images/logo.png';
const Landing = () => {
  return (
    <div>
      <nav>
        <img
          src={logo}
          alt="solutions"
          className="logo"
          width="250"
          height="60"
        />
      </nav>
      <div className="container page">
        <div className="info"></div>
        <h1>
          Computer <span>solutions</span> company
        </h1>
        <p>
          I'm baby yes plz ramps artisan godard literally, gentrify cloud bread
          narwhal listicle. Hexagon wolf cornhole godard palo santo crucifix
          DIY. Poke tumeric tattooed, lumbersexual hell of meh banjo fam ramps
          cardigan lo-fi freegan. Viral deep v scenester man braid shoreditch
          vice pinterest salvia waistcoat VHS disrupt chillwave bicycle rights
          tilde.
        </p>
        <button className="btn btn-hero">Login/Register</button>
      </div>
    </div>
  );
};

export default Landing;
