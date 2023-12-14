import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/fetchProductByID";

export default function Product() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductById(productId);
        setProduct(response);
        console.log(response);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <>
      <img src={product.thumbnail} alt={product.title} />
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>
      <h4>{product.condition}</h4>
      <h4>{product.warranty}</h4>
    </>
  );
}
