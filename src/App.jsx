import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductsDetails/ProductsDetails";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
