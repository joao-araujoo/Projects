import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatCurrency from "../../../utils/formatCurrency";
import "./styles.css";
import { useRef, useState } from "react";
import useCart from "../../../hooks/useCart";

CartItem.propTypes = {
  productObject: PropTypes.object.isRequired,
}

export default function CartItem({ productObject }) {
  const [itemCheckboxIsChecked, setItemCheckboxIsChecked] = useState(false);
  const itemCheckboxRef = useRef(null);

  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <input
        type="checkbox"
        name="checkItem"
        id={productObject.id}
        ref={itemCheckboxRef}
        value={itemCheckboxIsChecked}
        onChange={() =>
          setItemCheckboxIsChecked((currentState) => !currentState)
        }
      />
      <div className="cart-item__characteristics">
        <div className="cart-item__image">
          <img src={productObject.thumbnail} alt={productObject.title} />
        </div>
        <div className="cart-item__specifications">
          <div>
            <Link to={`/products/${productObject.id}`}>
              <h3>{productObject.title}</h3>
            </Link>
            <p>
              {productObject.attributes && productObject.attributes.length > 0
                ? productObject.attributes.find((att) => att.id === "BRAND")
                  ? productObject.attributes.find((att) => att.id === "BRAND")
                      .value_name
                  : "N/A"
                : "N/A"}
            </p>
          </div>
          <div className="cart-item__options">
            <h2>
              {productObject.price &&
                formatCurrency(productObject.price, productObject.currency_id)}
            </h2>
            <div className="product-quantity">
              <button>-</button>
              <span>{productObject.quantity}</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="removeFromCart-button"
        onClick={() => removeFromCart(productObject.id)}
      >
        ✖
      </button>
    </div>
  );
}
