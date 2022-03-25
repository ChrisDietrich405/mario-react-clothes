import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Clothes = () => {
  const [clothesItems, setClothesItems] = useState([]);

  const fetchClothes = async () => {
    try {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          return res.data;
        });
      setClothesItems(response);
    } catch (err) {
      alert("error");
    }
  };

  useEffect(() => {
    fetchClothes();
  }, []);

  return <></>;
};

export default Clothes;
