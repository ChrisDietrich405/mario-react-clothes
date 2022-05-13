import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ClothesContext } from "../ClothesContext";

const ClothesDetails = () => {
  const params = useParams();
  const details = params.details;

  const [clothesItems, setClothesItems, fetchClothes, fetchProduct] =
    useContext(ClothesContext);

  useEffect(() => {
    fetchProduct();
  }, []);

  // useEffect(() => {
  //   fetchClothes();
  // }, []);

  return (
    <h1>hello {details}</h1>
    // <div>
    //   {product.title}
    //   <img src={product.image} alt="" />
    // </div>
  );
};

export default ClothesDetails;
