import React, { useState, useEffect } from "react";

import ClothesList from "../ClothesList";

import { api } from "../../services/api";

import styles from "./styles.module.css";

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
    <div className={styles.clothes_container}>
      {clothesProducts.map((clothesProduct) => {
        return (
          <ClothesList
            key={clothesProduct.id}
            title={clothesProduct.title}
            image={clothesProduct.image}
            price={clothesProduct.price}
            description={clothesProduct.description}
          />
        );
      })}
    </div>
  );
};

export default Clothes;
