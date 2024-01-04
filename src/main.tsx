import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import "./tailwind.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root.tsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      {" "}
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
