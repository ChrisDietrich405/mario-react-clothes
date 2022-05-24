import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import Cart from "../Cart";

import styles from "./styles.module.css";

const ClothesDetails = () => {
  const [products, setProducts] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const params = useParams();

  const fetchDetails = async () => {
    const response = await api.get(`/products/${params.details}`);
    const { data } = response;
    setProducts(data);
  };

  const handleCartProducts = () => {
    setCartProducts([
      ...cartProducts,
      {
        ...products,
      },
    ]);
    console.log(cartProducts);
  };

  const handleNavigateToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    const localStorageProducts = localStorage.getItem("cartProducts");
    if (localStorageProducts) {
      const productsArray = JSON.parse(localStorageProducts);
      setCartProducts(productsArray);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  return (
    <div className={styles.product_container}>
      <div>
        <h2>{products.title}</h2>
        <img src={products.image} alt={products.title} />
        <button onClick={handleCartProducts}>Add to cart</button>
        <button onClick={handleNavigateToHomePage}>Return to home page</button>
      </div>
      <Cart cartProducts={cartProducts} />
    </div>
  );
};

export default ClothesDetails;
