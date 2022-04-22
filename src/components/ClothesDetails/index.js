import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ClothesDetails = () => {
  const [product, setProduct] = useState({});
  let params = useParams();

  const fetchProduct = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${params.details}`
    );
    console.log(response);
    const data = response.data;
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {product.title}
      <img src={product.image} alt="" />
    </div>
  );
};

export default ClothesDetails;
