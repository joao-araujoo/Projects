import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard";
import Exams from "./pages/Exams";
import Subjects from "./pages/Subjects";
import WrongQuestions from "./pages/WrongQuestions";
import Help from "./pages/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/exams",
        element: <Exams />
      },
      {
        path: "/subjects",
        element: <Subjects />
      },
      {
        path: "/wrong-questions",
        element: <WrongQuestions />
      },
      {
        path: "/help",
        element: <Help />
      }
    ]
  }
])

export default router