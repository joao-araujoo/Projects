import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import formatCurrency from "../../utils/formatCurrency";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export default function Cart({ menuRef }) {
  const { cart } = useCart();

  return (
    <div className="cart-menu" ref={menuRef}>
      <header>
        <h2>My Cart</h2>
      </header>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((product) => (
            // ================= COMPONENTIZAR ===========
            <div className="cart-item" key={product.id}>
              <input type="checkbox" name="checkItem" id={product.id} />
              <div className="cart-item__characteristics">
                <div className="cart-item__image">
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="cart-item__specifications">
                  <div>
                    <Link to={`/products/${product.id}`}>
                      <h3>{product.title}</h3>
                    </Link>
                    <p>
                      {product.attributes && product.attributes.length > 0
                        ? product.attributes.find((att) => att.id === "BRAND")
                          ? product.attributes.find((att) => att.id === "BRAND")
                              .value_name
                          : "N/A"
                        : "N/A"}
                    </p>
                  </div>
                  <div className="cart-item__options">
                    <h2>
                      {product.price &&
                        formatCurrency(product.price, product.currency_id)}
                    </h2>
                    <div className="product-quantity">
                      <button>-</button>
                      <span>{product.quantity}</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // ==============================================================
          ))
        ) : (
          <h2>Carrinho Vazio =(</h2>
        )}
      </div>
      {/* =========================== COMPONENTIZAR ========================== */}
      <div className="payment-items">
        <div className="sub-total">
          <span>Sub Total: </span>
          <span>
            {cart.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0
            )}
          </span>
        </div>
        <div className="shipping">
          <span>Shipping: </span>
          <span>
            {formatCurrency(
              cart.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              ) / 300
            )}
          </span>
        </div>
      </div>
      {/* ========================================================================= */}
      <hr className="cart-menu-bar" />
      {/* ============================ COMPONENTIZAR ================================= */}
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
      {/* ============================================================================= */}
    </div>
  );
}
