import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import ArticleList from "@/pages/article/ArticleList";
// import Article from
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "article",
        element: <ArticleList />,
      },
    ],
  },
]);
