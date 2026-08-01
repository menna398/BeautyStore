import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductStore from "../../store/productStore";

import bestSellers from "../../data/homeProducts.json";
import extraSkinCare from "../../data/ExtraSkinCareProducts.json";

import "./ProductDetails.css";
import Loader from "../Loader/Loader";

import toast from "react-hot-toast";

function ProductDetails() {
  const { id } = useParams(); //id from route

  const { products, loading, getAllProducts } = useProductStore();

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (products.length === 0) {
      getAllProducts();
    }
  }, []);

  const allProducts = [
    ...bestSellers.map((item) => ({
      ...item,
      image: item.image,
    })),

    ...extraSkinCare.map((item) => ({
      ...item,
      image: item.image,
    })),

    ...products.map((item) => ({
      ...item,
      image: item.thumbnail,
    })),
  ];

  const product = allProducts.find(
    (item) => item.id.toString() === id.toString(),
  );

  if (loading) return <Loader></Loader>;

  if (!product)
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>
      </div>
    );

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
    <div className="product-details py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="details-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className="col-lg-6">
            <h1>{product.title}</h1>

            <div className="details-price">
              <span className="current-price">${product.price}</span>

              {product.oldPrice && (
                <span className="old-price">${product.oldPrice}</span>
              )}
            </div>

            <p className="stock">
              In Stock :<span> 10</span>
            </p>

            <hr />

            <p className="description">{product.description}</p>

            <div className="quantity-box">
              <button onClick={() => setCount(Math.max(1, count - 1))}>
                -
              </button>

              <span>{count}</span>

              <button
                onClick={() => {
                  if (count >= 5) {
                    toast.error("Cannot add more than 5 items");
                    return;
                  }

                  setCount(count + 1);
                }}
              >
                +
              </button>
            </div>

            <button className="add-cart-btn" onClick={() => addToCart(product)}>
              Add To Cart
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
