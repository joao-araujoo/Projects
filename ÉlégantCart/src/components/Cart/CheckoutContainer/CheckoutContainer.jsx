import PropTypes from "prop-types";
import formatCurrency from "../../../utils/formatCurrency";
import "./styles.css";

CheckoutContainer.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default function CheckoutContainer({ cart }) {
  const toBuyProducts = cart.filter(
    (product) => product.toBuy && product.quantity > 0
  );

  const totalItems = toBuyProducts.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <div>
        <p>
          Total:{" "}
          <span>
            ({totalItems} {totalItems === 1 ? "Item" : "Items"})
          </span>
        </p>
        <h2>
          {formatCurrency(
            toBuyProducts.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            ) +
              toBuyProducts.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              ) /
                130
          )}
        </h2>
      </div>
      <div>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  );
}