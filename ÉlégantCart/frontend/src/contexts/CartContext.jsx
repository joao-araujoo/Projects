import { createContext, useState } from "react"
import PropTypes from "prop-types";
import { fetchProductById } from "../api/fetchProductByID";

export const CartContext = createContext({});

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedProducts = localStorage.getItem('elegantcart-cart')
    return storedProducts ? JSON.parse(storedProducts) : []
  });
  
  const addToCart = async (productId, quantity) => {
    const existingProductIndex = cart.findIndex(product => product.id === productId);

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
      setCart(currentState => {
        const updatedCart = [{ ...newProduct, quantity }, ...currentState];
        localStorage.setItem("elegantcart-cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  }

  const items = {
    cart, 
    addToCart
  }

  return (
    <CartContext.Provider value={items}>
      {children}
    </CartContext.Provider>
  )
}