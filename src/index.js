import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PageNotFound from "./components/sections/PageNotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BooksSection from "./components/sections/BooksSection";

const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound/>
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/books",
    element: <BooksSection />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
