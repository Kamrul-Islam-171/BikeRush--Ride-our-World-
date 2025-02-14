import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "../pages/about/About";
import AllProducts from "../pages/allProducts/AllProductLists";
import HomeContent from "../pages/home/HomeContent";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import SideBar, { TUserRole } from "../layouts/SideBar";

import { useAppSelector } from "../redux/features/hook";
import { VerifyToken } from "../utils/verifyToken";
import { selectCurrenttoken } from "../redux/features/auth/AuthSlice";
import { customerRoutes } from "./customer.routes";
import { adminRoutes } from "./admin.routes";
import ProtextedRoute from "../layouts/ProtextedRoute";

let user;
const DashboardRoutes = () => {
  const token = useAppSelector(selectCurrenttoken);
  user = token ? VerifyToken(token) : null;
  console.log(user);

  return <SideBar></SideBar>;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        index: true,
        element: <HomeContent></HomeContent>,
      },
      {
        path: "all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/customer",
    element: <ProtextedRoute role="customer"><SideBar></SideBar></ProtextedRoute>,
    children: customerRoutes,
  },
  {
    path: "/admin",
    element: <ProtextedRoute role="admin"><SideBar></SideBar></ProtextedRoute>,
    children: adminRoutes,
  },
]);
