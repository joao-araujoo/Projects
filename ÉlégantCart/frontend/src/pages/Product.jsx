import "../product.css";
import Header from "../components/Product/Header/Header";
import Cart from "../components/Cart/Cart";
import ProductSection from "../components/Product/ProductSection/ProductSection";
import { useRef } from "react";

export default function Product() {
  const cartMenu = useRef(null);
  const hamburgerButton = useRef(null);

  const handleCartMenuClick = () => {
    const newRightValue =
      cartMenu.current.style.right === "0px" ? "-350px" : "0px";
    cartMenu.current.style.right = newRightValue;

    hamburgerButton.current.style.position =
      newRightValue === "0px" ? "fixed" : "initial";
    hamburgerButton.current.style.zIndex =
      newRightValue === "0px" ? "1000" : "initial";
  };

  return (
    <>
      <Header handleFunction={handleCartMenuClick} hamburgerRef={hamburgerButton} />
      <Cart menuRef={cartMenu} />

      <main>
        <ProductSection />
      </main>
    </>
  );
}
