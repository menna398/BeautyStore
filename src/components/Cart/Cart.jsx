import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import toast from "react-hot-toast";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  function saveCart(newCart) {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const isLoggedIn = localStorage.getItem("userLogin") === "true";

  function handleCheckout() {
    if (!isLoggedIn) {
      toast.error("Please login first");
      return;
    }

    toast.success("Proceeding to checkout...");
    // بعدين لما تعملي صفحة Checkout
    // navigate("/checkout");
  }

  return (
    <>
      <section className="shop-banner">
        <div className="container text-center">
          <h1>Shopping Cart</h1>
          <p>Review your selected beauty essentials.</p>
        </div>
      </section>

      <div className="container py-5">
        {cart.length === 0 ? (
          <div className="text-center">
            <h3>Your cart is empty</h3>

            <Link to="/products" className="btn btn-dark mt-3">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <table className="table align-middle text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td className="d-flex align-items-center gap-3">
                      <img
                        src={item.image}
                        width="80"
                        height="80"
                        style={{ objectFit: "contain" }}
                      />
                      {item.title}
                    </td>

                    <td>${item.price}</td>

                    <td className="quantity-buttons">
                      <button
                        className=" border-0 bg-light"
                        onClick={() => {
                          if (item.quantity > 1) {
                            cart[index].quantity--;
                            saveCart([...cart]);
                          }
                        }}
                      >
                        -
                      </button>

                      <span className="mx-3">{item.quantity}</span>

                      <button
                        className=" border-0 bg-light"
                        onClick={() => {
                          if (item.quantity < 5) {
                            cart[index].quantity++;
                            saveCart([...cart]);
                          } else {
                            toast.error("Cannot add more than 5 items");
                          }
                        }}
                      >
                        +
                      </button>
                    </td>

                    <td>${(item.price * item.quantity).toFixed(2)}</td>

                    <td>
                      <button
                        onClick={() => {
                          cart.splice(index, 1);
                          saveCart([...cart]);
                          toast.success("Item removed from cart");
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-end mt-4">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>

              <button
                className="checkout-btn mt-3"
                onClick={handleCheckout}
                disabled={!isLoggedIn}
              >
                <Link
                  to="/checkout"
                  className="text-white text-decoration-none"
                >
                  Checkout
                </Link>
              </button>

              {!isLoggedIn && (
                <p className="text-danger mt-2">Please login to continue.</p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
