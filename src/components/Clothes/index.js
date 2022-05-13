import React, { useState, useEffect } from "react";

import ClothesList from "../ClothesList";

import { api } from "../../services/api";

const Clothes = () => {
  const [clothesProducts, setClothesProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await api.get("/products");
    const { data } = response;
    setClothesProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {clothesProducts.map((clothesProduct) => {
        return (
          <ClothesList key={clothesProduct.id} title={clothesProduct.title} />
        );
      })}
    </div>
  );
};

export default Clothes;
