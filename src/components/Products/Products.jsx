import { useEffect } from "react";
import useProductStore from "../../store/productStore";

import bestSellers from "../../data/homeProducts.json";
import extraSkinCare from "../../data/ExtraSkinCareProducts.json";

import "./Products.css";

import Loader from "../Loader/Loader";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Products() {
  const { products, loading, getAllProducts } = useProductStore();

  useEffect(() => {
    getAllProducts();
  }, []);

  const allProducts = [
    ...bestSellers.map((item) => ({
      ...item,
      image: item.image,
      isBestSeller: true,
    })),

    ...extraSkinCare.map((item) => ({
      ...item,
      image: item.image,
      isBestSeller: false,
    })),

    ...products.map((item) => ({
      ...item,
      image: item.thumbnail,
      isBestSeller: false,
    })),
  ];

  console.log(products);

  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      if (existingProduct.quantity < 5) {
        existingProduct.quantity++;
        toast.success("Quantity updated");
      } else {
        toast.error("Cannot add more than 5 items");
        return;
      }
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });

      toast.success("Item added to cart");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <>
      <section className="shop-banner">
        <div className="container text-center">
          <h1>Shop</h1>
          <p>Discover your favorite skincare, makeup & fragrance essentials.</p>
        </div>
      </section>

      <div className="container py-5">
        <div className="products-top d-flex justify-content-between align-items-center mb-5">
          <div>
            <span className="fw-semibold">{allProducts.length} Products</span>
          </div>

          <div>
            <span className="me-2 fw-semibold">Sort by:</span>
            <select className="form-select d-inline w-auto">
              <option>Best Selling</option>
            </select>
          </div>
        </div>

        <div className="row g-4">
          {loading ? (
            <Loader />
          ) : (
            allProducts.map((product, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="product-card">
                  <div className="product-image">
                    {product.isBestSeller && (
                      <>
                        <span className="best-badge">Best Seller</span>
                        <span className="sale-badge">Sale</span>
                      </>
                    )}

                    <img src={product.image} alt={product.title} />
                    <Link
                      to={`/products/${product.id}`}
                      className="quick-view-btn text-decoration-none"
                    >
                      <i className="fa-regular fa-eye me-2"></i>
                      Quick View
                    </Link>
                  </div>

                  <h5>{product.title}</h5>

                  <p className="price">
                    <span className="current-price">${product.price}</span>

                    {product.isBestSeller && (
                      <span className="old-price">${product.oldPrice}</span>
                    )}
                  </p>

                  <button
                    className="btn btn-dark w-100"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
