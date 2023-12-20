import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductsSection from "../components/ProductsSection/ProductsSection";

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
    cartMenu.current.style.right = cartMenu.current.style.right === "0px" ? "-350px" : "0px"
  }

  return (
    <>
      <Header handleFunction={handleCartMenuClick} />
      <Cart menuRef={cartMenu} />
      <SearchBar
        handleFunction={handleSubmit}
        inputValue={searchValue}
        setInputValue={setSearchValue}
      />

      <main>
        <ProductsSection loadingState={loading} productsState={products} />
      </main>
    </>
  );
}