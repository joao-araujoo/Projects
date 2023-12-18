import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import { Link } from "react-router-dom";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartMenu = useRef(null);

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

          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item">
            <input type="checkbox" name="checkItem" id="checkItemID" />
            <div className="cart-item__characteristics">
              <div className="cart-item__image">
                <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/179456/modelo_355.jpg?v=637564194244030000" />
              </div>
              <div className="cart-item__specifications">
                <div>
                  <Link to="/products/MLB3023681649">
                    <h3>Modelo Especial</h3>
                  </Link>
                  <p>Size: 35.5 cl / 355ml</p>
                </div>
                <div className="cart-item__options">
                  <h2>$3.55</h2>
                  <div className="product-quantity">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="payment-items">
            <div className="sub-total">
              <span>Sub Total: </span>
              <span>$ 10.93</span>
            </div>
            <div className="shipping">
              <span>Shipping: </span>
              <span>$ 2.99 </span>
            </div>
        </div>
        <hr className="cart-menu-bar" />
        <div className="checkout-container">
          <div>
            <p>Total: <span>(2 Items)</span></p>
            <h2>$ 13.92</h2>
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