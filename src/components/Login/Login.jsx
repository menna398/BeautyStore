import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Login.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    let newErrors = {};

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)) {
      newErrors.email = "Invalid email";
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    localStorage.setItem("userLogin", "true");
    toast.success("Login Successfully");

    setTimeout(() => {
      navigate("/");
    }, 1000);

    console.log(user);
  }

  return (
    <>
      <section className="shop-banner">
        <div className="container text-center">
          <h1 className=" text-light">Login</h1>
          <p className="text-secondary">Login to your account.</p>
        </div>
      </section>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="text-center mb-4">Login Account</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              <div className="mb-4">
                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleChange}
                />

                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>

              <button className="btn btn-dark w-100" type="submit">
                SIGN IN
              </button>

              <div className="text-center mt-4">
                <span>Don't have an account? </span>

                <Link to="/register" className="text-decoration-none">
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
