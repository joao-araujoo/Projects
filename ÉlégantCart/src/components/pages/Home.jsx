import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../api/fetchProducts";
import Header from "../Home/Header/Header";
import Cart from "../Cart/Cart";
import SearchBar from "../Home/SearchBar/SearchBar";
import ProductsSection from "../Home/ProductsSection/ProductsSection";
import { GoMoveToTop } from "react-icons/go";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartMenu = useRef(null);
  const hamburgerButton = useRef(null);
  const scrollTopButton = useRef(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("elegantcart-user"));

  // TODO fazer validação por token
  if (!localStorage.getItem("elegantcart-token")) {
    navigate("/login");
  }

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      setLoading(false);
      document.title = "ÉlégantCart";
    });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (searchValue !== "") {
      setLoading(true);
      fetchProducts(searchValue).then((response) => {
        setProducts(response);
        setLoading(false);
        document.title = `${searchValue} - ÉlégantCart`;
      });
      setSearchValue("");
    }
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

  function checkScrollPosition() {
    if (scrollTopButton.current) {
      scrollTopButton.current.style.opacity =
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
          ? "1"
          : "0";
    }
  }

  window.onscroll = () => {
    checkScrollPosition();
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header
        handleFunction={handleCartMenuClick}
        hamburgerRef={hamburgerButton}
        profilePicture={user?.profilePicture}
        username={user?.name}
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

      <button id="scroll-top-button" onClick={scrollTop} ref={scrollTopButton}>
        <GoMoveToTop />
      </button>
    </>
  );
}
