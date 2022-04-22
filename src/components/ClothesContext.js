import { createContext, useState } from "react";

export const ClothesContext = createContext();

export const ClothesProvider = ({ children }) => {
  const [clothesItems, setClothesItems] = useState([]);

  return (
    <ClothesContext.Provider value={[clothesItems, setClothesItems]}>
      {children}
    </ClothesContext.Provider>
  );
};
