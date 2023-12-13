import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import { useEffect, useState } from "react";
import { fetchProducts } from "./api/fetchProducts";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      setLoading(false);
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
        <div className="cart">
          <HiOutlineBars3BottomRight />
        </div>
      </header>
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
            <h2>{loading ? "Searching for products..." : "Find results"}</h2>
            <div className="products__container">
              {loading ? (
                <AiOutlineLoading className="loading" />
              ) : (
                products.map((product) => (
                  <div className="product" key={product.id}>
                    <img
                      src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                      alt={product.title}
                    />
                    <h3>{product.title}</h3>
                    <p>{product.seller.nickname}</p>
                    <h2>
                      {product.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: product.currency_id,
                      })}
                    </h2>
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