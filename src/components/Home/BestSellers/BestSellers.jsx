import React from "react";
import products from "../../../data/homeProducts.json";
import "./BestSellers.css";
import { Link } from "react-router-dom";

function BestSeller() {
  return (
    <section className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Best Sellers</h2>

        <p className="text-secondary">
          Discover our most-loved beauty essentials, carefully selected for
          their quality, performance, and everyday glow.
        </p>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-lg-3 col-md-6" key={product.id}>
            <div className="product-card">
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.title}
                  //   onClick={() => console.log("Image Clicked")}
                />
                <Link
                  to={`/products/${product.id}`}
                  className="quick-view-btn text-decoration-none"
                >
                  <i className="fa-regular fa-eye me-2"></i>
                  Quick View
                </Link>
              </div>

              <div className="mt-3">
                <h5>{product.title}</h5>

                <div className="mb-2 text-warning">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <p className="mb-2">
                  <span className="fw-bold fs-5">${product.price}</span>

                  <span className="text-secondary text-decoration-line-through ms-2">
                    ${product.oldPrice}
                  </span>
                </p>

                <button className="btn btn-dark w-100">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSeller;
