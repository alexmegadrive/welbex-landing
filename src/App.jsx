import React, { useState } from "react";
import Main from "./pages/Main/Main";
import Page404 from "./pages/Page404/Page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
    { basename: "/" }
  );

  return <RouterProvider router={router} />;
}

export default App;
