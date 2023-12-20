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
  const hamburgerButton = useRef(null);

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
    const newRightValue = cartMenu.current.style.right === "0px" ? "-350px" : "0px";
  cartMenu.current.style.right = newRightValue;

  // Ajuste para garantir que o ícone do carrinho permaneça visível
  hamburgerButton.current.style.position = newRightValue === "0px" ? "fixed" : "initial";
  hamburgerButton.current.style.zIndex = newRightValue === "0px" ? "1000" : "initial";
  }

  return (
    <>
      <Header handleFunction={handleCartMenuClick} hamburgerRef={hamburgerButton} />
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