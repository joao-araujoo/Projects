import { RouterProvider } from "react-router-dom";
import router from "./router";
import CartContextProvider from "./contexts/CartContext";
import UserContextProvider from "./contexts/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </UserContextProvider>
  );
}