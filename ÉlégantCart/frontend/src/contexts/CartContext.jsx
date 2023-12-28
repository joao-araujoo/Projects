import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { fetchProductById } from "../api/fetchProductByID";

export const CartContext = createContext({});

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedProducts = localStorage.getItem("elegantcart-cart");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const updateCartAndLocalStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("elegantcart-cart", JSON.stringify(updatedCart));
  };

  const changeQuantityFromCart = (productId, quantity) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: quantity } : product
    );
    updateCartAndLocalStorage(updatedCart);
  };

  const toggleToBuy = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, toBuy: !product.toBuy } : product
    );
    updateCartAndLocalStorage(updatedCart);
  };

  const addToCart = async (productId, quantity) => {
    const existingProductIndex = cart.findIndex(
      (product) => product.id === productId
    );

    if (existingProductIndex !== -1) {
      const updatedCart = cart.map((product, index) =>
        index === existingProductIndex
          ? { ...product, quantity: product.quantity + quantity }
          : product
      );
      updateCartAndLocalStorage(updatedCart);
    } else {
      const newProduct = await fetchProductById(productId);
      const updatedCart = [{ ...newProduct, quantity, toBuy: true }, ...cart];
      updateCartAndLocalStorage(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    updateCartAndLocalStorage(updatedCart);
  };

  const items = {
    cart,
    changeQuantityFromCart,
    addToCart,
    removeFromCart,
    toggleToBuy,
  };

  return <CartContext.Provider value={items}>{children}</CartContext.Provider>;
}
