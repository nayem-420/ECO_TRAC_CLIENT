import { createBrowserRouter } from "react-router";
import NotFound from "../Pages/Error/NotFound";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayouts/AuthLayout";
import Registers from "../Pages/Auth/Registers";
import Login from "../Pages/Auth/Login";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import ChallengesForm from "../Pages/Challenges/ChallengesForm";
import ChallengesList from "../Pages/Challenges/ChallengesList";
import ChallengeDetails from "../Pages/Challenges/ChallengeDetails";
import MyActivityDetails from "../Pages/MyActivity/MyActivityDetails";
import MyActivities from "../Pages/MyActivity/MyActivities";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "challenges",
        element: <ChallengesForm></ChallengesForm>,
      },
      {
        path: "challenges-all",
        element: <ChallengesList></ChallengesList>,
      },
      {
        path: "challenges/:id",
        element: <ChallengeDetails></ChallengeDetails>,
      },
      {
        path: "/my-activities/:id",
        element: <MyActivityDetails></MyActivityDetails>,
      },
      {
        path: "/my-activities",
        element: <MyActivities></MyActivities>
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
      {
        path: "forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
