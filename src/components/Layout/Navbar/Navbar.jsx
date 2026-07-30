import React from "react";

function Navbar() {
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
                <a className="nav-link fw-medium" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-medium" href="#">
                  Shop
                </a>
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
                <a className="nav-link fw-medium" href="#">
                  <i className="fa-regular fa-user me-2 text-black"></i>
                  Login
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-medium position-relative" href="#">
                  <i className="fa-solid fa-bag-shopping me-2 text-black"></i>
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
