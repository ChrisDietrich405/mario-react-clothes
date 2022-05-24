import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clothes from "./components/Clothes";
import ClothesDetails from "./components/ClothesDetails";
import { ClothesProvider } from "./components/ClothesContext";
import "./App.css";

const App = () => {
  return (
    <ClothesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clothes />} />
          <Route path=":details" element={<ClothesDetails />} />
        </Routes>
      </BrowserRouter>
    </ClothesProvider>
  );
};

export default App;
