import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { fetchProductById } from "../api/fetchProductByID";

export const CartContext = createContext({});

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CartContextProvider({ children }) {
  const [cartToBuy, setCartToBuy] = useState(() => {
    const storedProducts = localStorage.getItem("elegantcart-cartToBuy");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

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

      const productInCartToBuy = cartToBuy.some(
        (product) => product.id === productId
      );
      if (productInCartToBuy) {
        updateCartToBuy(updatedCart);
      }

      localStorage.setItem("elegantcart-cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const updateCartToBuy = (updatedCart) => {
    setCartToBuy((currentState) => {
      const updatedCartToBuy = updatedCart
        .filter((product) => currentState.some((p) => p.id === product.id))
        .map((product) => currentState.find((p) => p.id === product.id));
      localStorage.setItem(
        "elegantcart-cartToBuy",
        JSON.stringify(updatedCartToBuy)
      );
      return updatedCartToBuy;
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
        const updatedCart = [{ ...newProduct, quantity }, ...currentState];
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

    removeFromCartToBuy(productId);
  };

  const addToCartToBuy = async (productId) => {
    const existingProductIndex = cartToBuy.findIndex(
      (product) => product.id === productId
    );

    if (existingProductIndex !== -1) {
      removeFromCartToBuy(productId);
      return;
    }

    const newProductToBuy = cart.find((product) => product.id === productId);
    setCartToBuy((currentState) => {
      const updatedCartToBuy = [newProductToBuy, ...currentState];
      localStorage.setItem(
        "elegantcart-cartToBuy",
        JSON.stringify(updatedCartToBuy)
      );
      return updatedCartToBuy;
    });
  };

  const removeFromCartToBuy = (productId) => {
    setCartToBuy((currentState) => {
      const updatedCartToBuy = currentState.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem(
        "elegantcart-cartToBuy",
        JSON.stringify(updatedCartToBuy)
      );
      return updatedCartToBuy;
    });
  };

  const items = {
    cart,
    changeQuantityFromCart,
    addToCart,
    removeFromCart,
    cartToBuy,
    addToCartToBuy,
    removeFromCartToBuy,
  };

  return <CartContext.Provider value={items}>{children}</CartContext.Provider>;
}
