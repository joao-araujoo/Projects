import { useRef } from "react";
import Header from "../Product/Header/Header";
import Cart from "../Cart/Cart";
import ProductSection from "../Product/ProductSection/ProductSection";
import "../../product.css";

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
      <Header
        handleFunction={handleCartMenuClick}
        hamburgerRef={hamburgerButton}
      />
      <Cart menuRef={cartMenu} />

      <main>
        <ProductSection 
          menuRef={cartMenu} 
          hamburgerRef={hamburgerButton} 
        />
      </main>
    </>
  );
}
