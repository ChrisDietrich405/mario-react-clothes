//https://fakestoreapi.com/products
import Clothes from "./components/Clothes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClothesDetails from "./components/ClothesDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clothes />} />
          <Route path="/:details" element={<ClothesDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
