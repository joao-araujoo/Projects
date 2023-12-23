import { Link } from "react-router-dom";
import formatCurrency from "../../../utils/formatCurrency";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import "./styles.css";
import useCart from "../../../hooks/useCart";

Product.propTypes = {
  productObject: PropTypes.object,
};

export default function Product({ productObject }) {
  const { addToCart } = useCart();

  return (
    <div className="product">
      <button className="addToCart" onClick={() => addToCart(productObject.id, 1)}>
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
