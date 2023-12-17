import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
  },
  {
    path: "/register",  
    element: <Register />
  }
])

export default router;