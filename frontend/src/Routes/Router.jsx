import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Project from "./../pages/Project";
import Dashboard from "./../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "./../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
