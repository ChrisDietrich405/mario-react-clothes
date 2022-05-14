import React, { useState, useEffect, useContext } from "react";

import ClothesList from "../ClothesList";

import { ClothesContext } from "../ClothesContext";

import { api } from "../../services/api";

import styles from "./styles.module.css";

const Clothes = () => {
  const { clothesProducts, fetchProducts } = useContext(ClothesContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.clothes_container}>
      {clothesProducts.map((clothesProduct) => {
        return (
          <ClothesList
            id={clothesProduct.id}
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
