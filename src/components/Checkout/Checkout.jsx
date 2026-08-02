import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Checkout() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [orderDone, setOrderDone] = useState(false);
  const [orderNumber] = useState(Math.floor(100000 + Math.random() * 900000));

  const [finalTotal, setFinalTotal] = useState(0);

  const [form, setForm] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    let newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    toast.success("Order placed successfully!");

    setOrderDone(true);

    setFinalTotal(total);

    localStorage.removeItem("cart");
  }

  return (
    <>
      <section className="shop-banner">
        <div className="container text-center">
          <h1>Checkout</h1>
          <p>Complete your order.</p>
        </div>
      </section>

      {orderDone ? (
        <div className="order-success-card text-center mx-auto">
          <i className="fa-solid fa-circle-check success-icon"></i>

          <h2 className="mt-3">Order Placed Successfully!</h2>

          <p className="text-muted">Thank you for shopping with us.</p>

          <h5>Total Price: ${finalTotal.toFixed(2)}</h5>

          <h6>Order Number: #{orderNumber}</h6>

          <Link to="/" className="btn btn-dark mt-4">
            Back To Home
          </Link>
        </div>
      ) : (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="card shadow-sm p-4">
                <h3 className="text-center mb-4">Checkout</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.email}</small>
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      placeholder="Full Name"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.fullName}</small>
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.address}</small>
                  </div>

                  <div className="mb-4">
                    <input
                      className="form-control"
                      placeholder="City"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                    />
                    <small className="text-danger">{errors.city}</small>
                  </div>

                  <div className="border rounded p-3 mb-4 bg-light">
                    <h6 className="mb-1">Payment Method</h6>
                    <span>Cash On Delivery</span>
                  </div>

                  <div className="border rounded p-3 mb-4">
                    <h5 className="mb-3">Order Summary</h5>

                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex justify-content-between align-items-center mb-3"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            width="55"
                            height="55"
                            style={{ objectFit: "contain" }}
                          />

                          <div>
                            <div>{item.title}</div>
                            <small>Qty: {item.quantity}</small>
                          </div>
                        </div>

                        <strong>
                          ${(item.price * item.quantity).toFixed(2)}
                        </strong>
                      </div>
                    ))}

                    <hr />

                    <div className="d-flex justify-content-between fw-bold fs-5">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-dark w-100 py-2">
                    Place Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
