import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div><Toaster/></div>
    <RouterProvider router={router} />
  </React.StrictMode>
);