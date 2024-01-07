import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

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