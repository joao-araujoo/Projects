import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products/:productId", 
    element: <Product />
  },
  {
    path: "/login",
    element: <Login />
  }
])

export default router;