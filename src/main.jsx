import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import ReactDOM from "react-dom/client";
import React from "react";
import { Dashboard } from "./pages/Dashboard";
import GerarRelatorio from "./pages/GerarRelatorio";
import { Reserva } from "./pages/Reserva";
import "./index.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/relatorio",
    element: <GerarRelatorio />,
  },
  {
    path: "/reserva",
    element: <Reserva />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
