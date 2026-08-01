import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useProductStore from "../src/store/productStore";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductsDetails/ProductsDetails";
import { Toaster } from "react-hot-toast";

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
