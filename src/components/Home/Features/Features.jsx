import React from "react";

function Features() {
  return (
    <section className="container py-5">
      <div className="row text-center">

        <div className="col-lg-3 col-md-6">
          <i className="fa-solid fa-truck fs-1 text-danger mb-3"></i>
          <h4>Free Shipping</h4>
          <p className="text-secondary">Free shipping over $130.</p>
        </div>

        <div className="col-lg-3 col-md-6">
          <i className="fa-solid fa-arrow-rotate-left fs-1 text-danger mb-3"></i>
          <h4>Return Policy</h4>
          <p className="text-secondary">Within 30 days for an exchange.</p>
        </div>

        <div className="col-lg-3 col-md-6">
          <i className="fa-solid fa-money-bill-transfer fs-1 text-danger mb-3"></i>
          <h4>Save Money</h4>
          <p className="text-secondary">Shop smart and save bigger.</p>
        </div>

        <div className="col-lg-3 col-md-6">
          <i className="fa-solid fa-headset fs-1 text-danger mb-3"></i>
          <h4>24/7 Support</h4>
          <p className="text-secondary">24 hours a day, 7 days a week.</p>
        </div>

      </div>
    </section>
  );
}

export default Features;