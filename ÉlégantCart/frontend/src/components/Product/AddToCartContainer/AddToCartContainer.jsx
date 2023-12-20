import PropTypes from "prop-types";
import formatCurrency from "../../../utils/formatCurrency";
import "./styles.css";

AddToCartContainer.propTypes = {
  product: PropTypes.object,
  productQuantityState: PropTypes.number,
  setProductQuantityStateFunction: PropTypes.func,
  handleFunction: PropTypes.func,
}

export default function AddToCartContainer({ product, productQuantityState, setProductQuantityStateFunction, handleFunction }) {
  return (
    <div className="container__add-cart">
      <h2>
        {product.price && formatCurrency(product.price, product.currency_id)}
      </h2>
      <div className="add-cart__buttons">
        <div className="product-quantity">
          <button
            onClick={() =>
              setProductQuantityStateFunction((currentState) =>
                currentState > 0 ? currentState - 1 : 0
              )
            }
          >
            -
          </button>
          <span>{productQuantityState}</span>
          <button
            onClick={() =>
              setProductQuantityStateFunction(
                (currentState) => currentState + 1
              )
            }
          >
            +
          </button>
        </div>
        {/* TODO adicionar modal toastify para mostrar que foi ou não ao carrinho */}
        <button
          className="addToCart-button"
          onClick={() => handleFunction(product.id)}
        >
          Cart
        </button>
      </div>
    </div>
  );
}
