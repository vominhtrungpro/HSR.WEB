import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Characters from "../pages/Characters/Characters";
import React from 'react';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/characters",
    element: <Characters />,
  }
]);

export default router;