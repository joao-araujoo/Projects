import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../api/fetchProducts";
import Header from "../components/Home/Header/Header";
import Cart from "../components/Cart/Cart";
import SearchBar from "../components/Home/SearchBar/SearchBar";
import ProductsSection from "../components/Home/ProductsSection/ProductsSection";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartMenu = useRef(null);
  const hamburgerButton = useRef(null);
  const navigate = useNavigate();

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
      setProducts(response);
      setLoading(false);
    });
    setSearchValue("");
  };

  const handleCartMenuClick = () => {
    const newRightValue =
      cartMenu.current.style.right === "0px" ? "-350px" : "0px";
    cartMenu.current.style.right = newRightValue;

    hamburgerButton.current.style.position =
      newRightValue === "0px" ? "fixed" : "initial";
    hamburgerButton.current.style.zIndex =
      newRightValue === "0px" ? "1000" : "initial";
  };

  // TODO verificar token
  if (false) {
    navigate('/login');
    return;
  }

  return (
    <>
      <Header
        handleFunction={handleCartMenuClick}
        hamburgerRef={hamburgerButton}
      />
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
