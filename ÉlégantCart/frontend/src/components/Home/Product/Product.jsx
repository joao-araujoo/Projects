import { Link } from "react-router-dom";
import formatCurrency from "../../../utils/formatCurrency";
import PropTypes from "prop-types";
import "./styles.css";

Product.propTypes = {
  productObject: PropTypes.object,
};

export default function Product({ productObject }) {
  return (
    <div className="product">
      <Link to={`/products/${productObject.id}`} style={{ textDecoration: "none" }}>
        <img
          src={productObject.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt={productObject.title}
          loading="lazy"
        />
        <h3>{productObject.title}</h3>
        <p>{productObject.seller.nickname}</p>
        <h2>
          {formatCurrency(productObject.price)}
        </h2>
      </Link>
    </div>
  );
}
