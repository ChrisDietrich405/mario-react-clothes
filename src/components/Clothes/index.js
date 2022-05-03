import React from "react";
import { useState, useEffect, useContext } from "react";
import { ClothesContext } from "../ClothesContext";

import ClothesCards from "../ClothesCards";

import styles from "./styles.module.css";

const Clothes = () => {
  const [clothesItems, setClothesItems, fetchClothes] =
    useContext(ClothesContext);

  useEffect(() => {
    fetchClothes();
  }, []);

  return (
    <div className={styles.container}>
      {clothesItems.map((clothesItem, index) => {
        return <ClothesCards key={index} {...clothesItem} />;
      })}
    </div>
  );
};

export default Clothes;
