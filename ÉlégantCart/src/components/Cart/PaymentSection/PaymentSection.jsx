import PropTypes from "prop-types";
import formatCurrency from "../../../utils/formatCurrency";
import "./styles.css";

PaymentSection.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default function PaymentSection({ cart }) {
  const toBuyProducts = cart.filter((product) => product.toBuy);

  return (
    <div className="payment-items">
      <div className="sub-total">
        <span>Sub Total: </span>
        <span>
          {formatCurrency(
            toBuyProducts.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            )
          )}
        </span>
      </div>
      <div className="shipping">
        <span>Shipping: </span>
        <span>
          {formatCurrency(
            toBuyProducts.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            ) / 130
          )}
        </span>
      </div>
    </div>
  );
}
