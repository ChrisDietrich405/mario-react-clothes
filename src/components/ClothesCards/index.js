import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const ClothesCards = ({ image, title, price, description, id }) => {
  const navigate = useNavigate();

  const handleDetailsRouting = () => {
    navigate(`/${id}`);
  };

  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <img src={image} alt={title} />
      <p>{price}</p>
      <button onClick={handleDetailsRouting}>details</button>
    </div>
  );
};

export default ClothesCards;
