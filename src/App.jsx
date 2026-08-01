import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useProductStore from "../src/store/productStore";
import Products from "./components/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ,
      {
        path: "products",
        element: <Products></Products>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
