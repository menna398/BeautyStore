import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("userLogin") === "true";

  function logout() {
    localStorage.removeItem("userLogin");
    navigate("/login");
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto gap-lg-4">
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/products">
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-medium" href="#">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-medium" href="#">
                  Other Pages<i className="fa-solid fa-angle-down ms-1"></i>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto align-items-center gap-lg-3">
              <li className="nav-item">
                {isLoggedIn ? (
                  <button
                    className="nav-link fw-medium border-0 bg-transparent"
                    onClick={logout}
                  >
                    <i className="fa-solid fa-right-from-bracket me-2 text-black"></i>
                    Logout
                  </button>
                ) : (
                  <Link className="nav-link fw-medium" to="/login">
                    <i className="fa-regular fa-user me-2 text-black"></i>
                    Login
                  </Link>
                )}
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link fw-medium position-relative"
                  to="/cart"
                >
                  <i className="fa-solid fa-bag-shopping me-2 text-black"></i>
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
