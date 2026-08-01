import React from "react";
import FoundationGirl from "../../../assets/FoundationGirl.webp";
import SerumGirl from "../../../assets/SerumGirl.webp";
import GlossyGirl from "../../../assets/GlossyGirl.webp";
import EyeBatchGirl from "../../../assets/EyeBatchGirl.webp";
import "./ExploreBeauty.css";
import { Link } from "react-router-dom";

function ExploreBeauty() {
  return (
    <section className="container my-5 py-5 text-center">
      <h2 className="display-5 fw-bold mb-3">Explore Beauty</h2>

      <p className="text-secondary mb-5">
        Discover our carefully selected beauty essentials for your everyday
        glow.
      </p>

      <div className="row g-4">
        <div className="col-lg-3 col-md-6">
          <div className="beauty-card">
            <img src={FoundationGirl} alt="" />
          </div>

          <p className="product-title">Foundation</p>

          <Link to="/products" className="shop-link">
            Shop Now
          </Link>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="beauty-card">
            <img src={SerumGirl} alt="" />
          </div>

          <p className="product-title">Face Serum</p>

          <Link to="/products" className="shop-link">
            Shop Now
          </Link>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="beauty-card">
            <img src={GlossyGirl} alt="Lipstick" />
          </div>

          <p className="product-title">Glossy Lipstick</p>

          <Link to="/products" className="shop-link">
            Shop Now
          </Link>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="beauty-card">
            <img src={EyeBatchGirl} alt="Eye Patch" />
          </div>

          <p className="product-title">Eye Patch</p>

          <Link to="/products" className="shop-link">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExploreBeauty;
