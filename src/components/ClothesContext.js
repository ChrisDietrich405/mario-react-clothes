import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ClothesContext = createContext();

export const ClothesProvider = ({ children }) => {
  const [clothesItems, setClothesItems] = useState([]);
  console.log(children, clothesItems);

  return (
    <ClothesContext.Provider value={[clothesItems, setClothesItems]}>
      {children}
    </ClothesContext.Provider>
  );
};

// import { createContext, useState } from "react";

// export const ClothesContext = createContext();

// export const ClothesProvider = ({ children }) => {
//   const [clothesItems, setClothesItems] = useState([]);

//   return (
//     <ClothesContext.Provider value={[clothesItems, setClothesItems]}>
//       {children}
//     </ClothesContext.Provider>
//   );
// };
