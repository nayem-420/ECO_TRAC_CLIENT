import { createBrowserRouter } from "react-router";
import NotFound from "../Pages/Error/NotFound";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayouts/AuthLayout";
import Registers from "../Pages/Auth/Registers";
import Login from "../Pages/Auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "register",
        element: <Registers></Registers>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
