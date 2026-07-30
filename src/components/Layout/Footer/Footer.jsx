import React from "react";
import "./Footer.css";
import photo1 from "../../../assets/web1.webp";
import photo2 from "../../../assets/web2.webp";
import photo3 from "../../../assets/web3.webp";
import photo4 from "../../../assets/web4.webp";
import photo5 from "../../../assets/web5.jpg";

function Footer() {
  return (
    <footer className=" footer pt-5 mt-5 border-top">
      <div className="container">
        <div className="row g-3 mb-5">
          <div className="col">
            <img src={photo1} className="img-fluid" alt="" />
            <div className="overlay">
              <i className="fa-brands fa-instagram"></i>
              <p>Follow us</p>
            </div>
          </div>
          <div className="col">
            <img src={photo2} className="img-fluid" alt="" />
            <div className="overlay">
              <i className="fa-brands fa-instagram"></i>
              <p>Follow us</p>
            </div>
          </div>
          <div className="col">
            <img src={photo3} className="img-fluid" alt="" />
            <div className="overlay">
              <i className="fa-brands fa-instagram"></i>
              <p>Follow us</p>
            </div>
          </div>
          <div className="col">
            <img src={photo4} className="img-fluid" alt="" />
            <div className="overlay">
              <i className="fa-brands fa-instagram"></i>
              <p>Follow us</p>
            </div>
          </div>
          <div className="col">
            <img src={photo5} className="img-fluid" alt="" />
            <div className="overlay">
              <i className="fa-brands fa-instagram"></i>
              <p>Follow us</p>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Contact Info</h5>

            <p className="text-secondary mb-2">
              <i className="fa-regular fa-envelope me-2 "></i>
              test@example.com
            </p>

            <p className="text-secondary mb-2">
              <i className="fa-solid fa-phone me-2 "></i>
              +20 100 123 4567
            </p>

            <p className="text-secondary">
              <i className="fa-solid fa-location-dot me-2 "></i>
              Cairo, Egypt
            </p>

            <div className="mt-3">
              <i className="fab fa-facebook-f me-3"></i>
              <i className="fab fa-instagram me-3"></i>
              <i className="fab fa-linkedin-in me-3"></i>
              <i className="fab fa-x-twitter"></i>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <p>
              <a href="#" className="text-decoration-none text-secondary">
                About Us
              </a>
            </p>
            <p>
              <a href="#" className="text-decoration-none text-secondary">
                Products
              </a>
            </p>
            <p>
              <a href="#" className="text-decoration-none text-secondary">
                Contact
              </a>
            </p>
            <p>
              <a href="#" className="text-decoration-none text-secondary">
                Privacy Policy
              </a>
            </p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Customer Care</h5>

            <p className="text-secondary">
              We provide high-quality skincare and beauty products with fast
              shipping and excellent customer support.
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <p className="text-secondary text-center ">
          © 2026 Beauty Store. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
