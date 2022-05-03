import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ClothesContext = createContext();

export const ClothesProvider = ({ children }) => {
  const [clothesItems, setClothesItems] = useState([]);
  const [product, setProduct] = useState({});

  const params = useParams();

  const fetchClothes = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setClothesItems(data);
    } catch (err) {
      alert(err);
    }
  };

  // const fetchProduct = () => {
  //   return "hello ";
  // };

  const fetchProduct = async (details) => {
    console.log("hello");
    const response = await axios.get(
      `https://fakestoreapi.com/products/${params.details}`
    );
    const data = response.data;
    setProduct(data);
  };

  return (
    <ClothesContext.Provider
      value={[
        clothesItems,
        setClothesItems,
        fetchClothes,
        fetchProduct,
        product,
        setProduct,
      ]}
    >
      {children}
    </ClothesContext.Provider>
  );
};
