import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ExamsContextProvider } from "./contexts/ExamsContext";

export default function App() {
  return (
    <div className="app">
      <ExamsContextProvider>
        <RouterProvider router={router} />  
      </ExamsContextProvider>
    </div>
  );
}
