import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import ArticleList from "@/pages/article/ArticleList";
import Index from "@/pages/article/ArticleList";
import Test from "@/pages/Test";
// import Article from
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Index />,
      },
      {
        path: "article",
        element: <ArticleList />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);
