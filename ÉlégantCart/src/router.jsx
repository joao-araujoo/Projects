import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products/:productId", 
    element: <Product />
  }
])

export default router;