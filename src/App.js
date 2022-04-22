//https://fakestoreapi.com/products
import Clothes from "./components/Clothes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClothesProvider } from "./components/ClothesContext";
import ClothesDetails from "./components/ClothesDetails";
function App() {
  return (
    <div className="App">
      <ClothesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Clothes />} />
            <Route path="/:details" element={<ClothesDetails />} />
          </Routes>
        </BrowserRouter>
      </ClothesProvider>
    </div>
  );
}

export default App;
