import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clothes from "./components/Clothes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clothes />} />
        {/* <Route path=":teamId" element={<Team />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
