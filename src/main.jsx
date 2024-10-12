import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./queries.css";
import App from "./App.jsx";
import Articles from "./components/Articles.jsx";
import RequisitosExamenMedico from "./articles/RequisitosExamenMedico.jsx";
import MedicosCiviles from "./articles/MedicosCiviles.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/articulos",
    element: <Articles />,
  },
  {
    path: "/articulos/requisitos-examen-medico",
    element: <RequisitosExamenMedico />,
  },
  {
    path: "/articulos/medicos-civiles",
    element: <MedicosCiviles />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
