import { RouterProvider } from "react-router-dom";
import router from "./router";
import CartContextProvider from "./contexts/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  )
}