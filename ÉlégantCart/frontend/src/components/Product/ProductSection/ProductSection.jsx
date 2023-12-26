import { useEffect, useState } from "react";
import AddToCartContainer from "../AddToCartContainer/AddToCartContainer";
import useCart from "../../../hooks/useCart";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../api/fetchProductByID";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
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

  const truncateString = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str;

  const notify = () =>
    toast(
      `(${productQuantity}x) "${truncateString(product.title, 30)}" ${
        productQuantity === 1 ? "foi adicionado" : "foram adicionados"
      } ao carrinho com sucesso =)`,
      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          background: "white",
          userSelect: "none",
        },
        progressStyle: {
          background: "#1b2585",
        },
      }
    );

  const handleAddToCart = (productId) => {
    if (productQuantity > 0) {
      addToCart(productId, productQuantity);
      setProductQuantity(1);
      notify();
    }
  };

  const conditions = {
    new: "Novo",
    used: "Usado",
    refurbished: "Recondicionado",
  };

  return (
    <>
      <ToastContainer limit={3} />
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
    </>
  );
}
