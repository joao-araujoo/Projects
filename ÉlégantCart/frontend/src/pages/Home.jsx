import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartMenu = useRef(null);
  const { cart } = useCart();

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      setLoading(false);
      document.title = "ÉlégantCart";
    });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setLoading(true);
    fetchProducts(searchValue).then((response) => {
      setProducts(response)
      setLoading(false);
    });
    setSearchValue("");
  }

  const handleCartMenuClick = () => {
    cartMenu.current.style.right = cartMenu.current.style.right === "0px" ? "-300px" : "0px"
  }

  return (
    <>
      <header>
        <div className="user-profile">
          <img
            src="https://br.web.img3.acsta.net/pictures/19/03/19/17/22/2985063.jpg"
            alt="Profile Picture"
          />
          <div className="greetings">
            <p>Hello,</p>
            <h3>Tarantino</h3>
          </div>
        </div>
        <div className="cart" onClick={handleCartMenuClick}>
          <HiOutlineBars3BottomRight />
        </div>
      </header>

      <div className="cart-menu" ref={cartMenu}>
        <header>
          <h2>My Cart</h2>
        </header>
        <div className="cart-items">
          {cart.length > 0 ? (
            cart.map((product) => (
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
                            ? product.attributes.find(
                                (att) => att.id === "BRAND"
                              ).value_name
                            : "N/A"
                          : "N/A"}
                      </p>
                    </div>
                    <div className="cart-item__options">
                      <h2>
                        {product.price &&
                          product.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: product.currency_id,
                          })}
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
            ))
          ) : (
            <h2>Carrinho Vazio =(</h2>
          )}
        </div>
        <div className="payment-items">
          <div className="sub-total">
            <span>Sub Total: </span>
            <span>
              {cart
                .reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0
                )
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
          </div>
          <div className="shipping">
            <span>Shipping: </span>
            <span>
              {(
                cart.reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0
                ) / 300
              ).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
        <hr className="cart-menu-bar" />
        <div className="checkout-container">
          <div>
            <p>
              Total:{" "}
              <span>
                ({cart.length} {cart.length === 1 ? "Item" : "Items"})
              </span>
            </p>
            <h2>
              ${" "}
              {cart.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0
              )}
            </h2>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>

      <main>
        <section>
          <form className="search-bar" onSubmit={handleSubmit}>
            <button type="submit">
              <FiSearch />
            </button>
            <input
              type="search"
              value={searchValue}
              onChange={(ev) => setSearchValue(ev.target.value)}
              placeholder="Search Products"
            />
          </form>
        </section>
        <section>
          <div className="products">
            <h2>
              {loading
                ? "Searching for products..."
                : products.length > 0
                ? "Find results"
                : "Oops... Nothing found =C"}
            </h2>
            <div className="products__container">
              {loading ? (
                <AiOutlineLoading className="loading" />
              ) : (
                products.map((product) => (
                  <div className="product" key={product.id}>
                    <Link
                      to={`/products/${product.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                        alt={product.title}
                        loading="lazy"
                      />
                      <h3>{product.title}</h3>
                      <p>{product.seller.nickname}</p>
                      <h2>
                        {product.price.toLocaleString("pt-br", {
                          style: "currency",
                          currency: product.currency_id,
                        })}
                      </h2>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}