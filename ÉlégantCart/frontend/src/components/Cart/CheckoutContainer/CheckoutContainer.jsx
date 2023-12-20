import PropTypes from "prop-types";
import formatCurrency from "../../../utils/formatCurrency";
import "./styles.css";

CheckoutContainer.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default function CheckoutContainer({ cart }) {
  return (
    <div className="checkout-container">
      <div>
        <p>
          Total:{" "}
          <span>
            ({cart.length} {cart.length === 1 ? "Item" : "Items"})
          </span>
        </p>
        <h2>
          {formatCurrency(
            cart.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            )
          )}
        </h2>
      </div>
      <div>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  );
}
