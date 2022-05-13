import React from "react";
import { useState, useEffect, useContext } from "react";
import { ClothesContext } from "../ClothesContext";
import axios from "axios";

import ClothesCards from "../ClothesCards";

import styles from "./styles.module.css";

const Clothes = () => {
  const { clothesItems, setClothesItems } = useContext(ClothesContext);

  const fetchClothes = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setClothesItems(data);
    } catch (err) {
      alert(err);
    }
  };

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
