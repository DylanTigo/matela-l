import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Accueil } from "./Accueil";
import { Rechercher } from "./Recherche";
import Produit from "./Produit";
import App from "./App.jsx";
import "./css/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/" element={<Accueil />} />
        <Route
          path="/recherche"
          element={<Rechercher/>}
        />
        <Route path="/produit/:id" element={<Produit />}></Route>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
