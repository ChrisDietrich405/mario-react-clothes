import { createContext, useState } from "react";

import { api } from "../services/api";

export const ClothesContext = createContext();

export const ClothesProvider = ({ children }) => {
  const [clothesProducts, setClothesProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await api.get("/products");
    const { data } = response;
    console.log(data);
    setClothesProducts(data);
  };

  return (
    <ClothesContext.Provider value={{ clothesProducts, fetchProducts }}>
      {children}
    </ClothesContext.Provider>
  );
};
