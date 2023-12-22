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

  const changeQuantityFromCart = (productId, quantity) => {
    setCart((currentState) => {
      const updatedCart = currentState.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: quantity };
        }
        return product;
      });

      localStorage.setItem("elegantcart-cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleToBuy = (productId) => {
    setCart((currentState) => {
      const updatedCart = currentState.map((product) => {
        if (product.id === productId) {
          return { ...product, toBuy: !product.toBuy };
        }
        return product;
      });

      localStorage.setItem("elegantcart-cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // TODO refatorar depois função de ver se já existe
  const addToCart = async (productId, quantity) => {
    const existingProductIndex = cart.findIndex(
      (product) => product.id === productId
    );

    if (existingProductIndex !== -1) {
      setCart((currentState) => {
        const updatedCart = currentState.map((product, index) => {
          if (index === existingProductIndex) {
            return { ...product, quantity: product.quantity + quantity };
          }
          return product;
        });

        localStorage.setItem("elegantcart-cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    } else {
      const newProduct = await fetchProductById(productId);
      setCart((currentState) => {
        const updatedCart = [
          { ...newProduct, quantity, toBuy: true },
          ...currentState,
        ];
        localStorage.setItem("elegantcart-cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  };

  const removeFromCart = (productId) => {
    setCart((currentState) => {
      const updatedCart = currentState.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("elegantcart-cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
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
