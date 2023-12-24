import { Link } from "react-router-dom";
import formatCurrency from "../../../utils/formatCurrency";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import "./styles.css";
import useCart from "../../../hooks/useCart";
import { useRef } from "react";

Product.propTypes = {
  productObject: PropTypes.object,
};

export default function Product({ productObject }) {
  const addToCartButton = useRef(null);
  const { addToCart } = useCart();
  
  const handleClick = () => {
    addToCart(productObject.id, 1);
    addToCartButton.current.style.backgroundColor = "#9FB9A1";
    addToCartButton.current.style.color = "#fff";

    const addToCartInterval = setInterval(() => {
      addToCartButton.current.style.backgroundColor = "rgba(220, 220, 220, 0.5)";
      addToCartButton.current.style.color = "#00098a";

      clearInterval(addToCartInterval);
    }, 500);
  }

  return (
    <div className="product">
      <button
        className="addToCart"
        onClick={handleClick}
        ref={addToCartButton}
      >
        <FaCartPlus />
      </button>
      <Link
        to={`/products/${productObject.id}`}
        style={{ textDecoration: "none" }}
      >
        <img
          src={productObject.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt={productObject.title}
          loading="lazy"
        />
        <h3>{productObject.title}</h3>
        <p>{productObject.seller.nickname}</p>
        <h2>{formatCurrency(productObject.price)}</h2>
      </Link>
    </div>
  );
}
