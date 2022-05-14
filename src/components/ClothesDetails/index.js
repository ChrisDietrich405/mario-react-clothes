import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

const ClothesDetails = () => {
  const [products, setProducts] = useState({});
  const params = useParams();

  const fetchDetails = async () => {
    const response = await api.get(`/products/${params.details}`);
    const { data } = response;
    setProducts(data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <h2>{products.title}</h2>
      <img src={products.image} alt={products.title} />
      <button>Add to cart</button>
    </div>
  );
};

export default ClothesDetails;
