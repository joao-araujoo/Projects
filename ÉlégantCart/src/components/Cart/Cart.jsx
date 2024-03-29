import useCart from "../../hooks/useCart";
import "./styles.css";
import CartItem from "./CartItem/CartItem";
import PaymentSection from "./PaymentSection/PaymentSection";
import CheckoutContainer from "./CheckoutContainer/CheckoutContainer";

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
            <CartItem productObject={product} key={product.id} />
          ))
        ) : (
          <h2>Empty Cart =(</h2>
        )}
      </div>

      <PaymentSection cart={cart} />
      <hr className="cart-menu-bar" />

      <CheckoutContainer cart={cart} />
    </div>
  );
}
