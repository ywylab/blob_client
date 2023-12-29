import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Contact from "../pages/Contact";
import App from "../App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
