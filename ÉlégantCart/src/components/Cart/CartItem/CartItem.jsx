import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatCurrency from "../../../utils/formatCurrency";
import "./styles.css";
import useCart from "../../../hooks/useCart";

CartItem.propTypes = {
  productObject: PropTypes.object.isRequired,
}

export default function CartItem({ productObject }) {
  const { cart, changeQuantityFromCart, removeFromCart, toggleToBuy } = useCart();

  const product = cart.find(product => product.id === productObject.id);

  const handleDecreaseQuantity = () => {
    const newQuantity = Math.max(product.quantity - 1, 0);
    changeQuantityFromCart(productObject.id, newQuantity);
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = product.quantity + 1;
    changeQuantityFromCart(productObject.id, newQuantity);
  };

  const handleIsChecked = () => {
    const product = cart.find(product => product.id === productObject.id);
    if (product) {
      return product.toBuy;
    }
  }

  return (
    <div className="cart-item">
      <input
        type="checkbox"
        name="checkItem"
        id={productObject.id}
        onChange={() => toggleToBuy(productObject.id)}
        checked={handleIsChecked()}
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
              <button onClick={handleDecreaseQuantity}>-</button>
              <span>{product.quantity}</span>
              <button onClick={handleIncreaseQuantity}>+</button>
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
