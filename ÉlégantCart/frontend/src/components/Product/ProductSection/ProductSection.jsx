import { useEffect, useState } from "react";
import AddToCartContainer from "../AddToCartContainer/AddToCartContainer";
import useCart from "../../../hooks/useCart";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../api/fetchProductByID";
import "./styles.css";

export default function ProductSection() {
  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const { productId } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProductById(productId);
      setProduct(response);
      document.title = response.title ? response.title : "ÉlégantCart";
    };

    fetchData();
  }, [productId]);

  const handleAddToCart = (productId) => {
    if (productQuantity > 0) {
      addToCart(productId, productQuantity);
      alert("Adicionado ao carrinho com sucesso!");
      setProductQuantity(1);
    }
  };

  const conditions = {
    new: "Novo",
    used: "Usado",
    refurbished: "Recondicionado",
  };

  return (
    <section>
      <div className="product-section">
        <div className="container__image">
          <img
            src={
              product.thumbnail &&
              product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")
            }
            alt={product.title}
          />
        </div>
        <div className="container__product">
          <div className="product-characteristics">
            <h2>{product.title}</h2>
            <div>
              <p>
                {product.attributes && product.attributes.length > 0
                  ? product.attributes.find((att) => att.id === "BRAND")
                    ? product.attributes.find((att) => att.id === "BRAND")
                        .value_name
                    : "N/A"
                  : "N/A"}
              </p>
              <p>{conditions[product.condition]}</p>
            </div>
          </div>
          <hr />
          <div className="description">
            <h3>Product Description</h3>
            <p>
              {product.description
                ? product.description
                : "Oops... Ainda não há uma descrição para este produto."}
            </p>
          </div>
          <AddToCartContainer
            product={product}
            productQuantityState={productQuantity}
            setProductQuantityStateFunction={setProductQuantity}
            handleFunction={handleAddToCart}
          />
        </div>
      </div>
    </section>
  );
}
