import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const ClothesList = ({ title, image, price, description }) => {
  const handleNavigateToDetailsPage = () => {};
  return (
    <div className={styles.clothes_container}>
      <h4>{title}</h4>
      <img src={image} alt="" />
      <p>{price}</p>
      <button onClick={handleNavigateToDetailsPage}>Details</button>
    </div>
  );
};

export default ClothesList;
