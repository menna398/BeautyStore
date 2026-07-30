import React from "react";
import HomePhoto from "../../../assets/HomePhoto2.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src={HomePhoto} alt="Hero" />
      <div className="hero-content">
        <p className="sub-title">The secrets beauty!</p>

        <h1>
          Your beauty,
          <br />
          our passion.
        </h1>

        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default Hero;
