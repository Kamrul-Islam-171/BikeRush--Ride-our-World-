import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about/About";
import AllProducts from "../pages/allProducts/AllProductLists";
import HomeContent from "../pages/home/HomeContent";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import SideBar from "../layouts/SideBar";


import { customerRoutes } from "./customer.routes";
import { adminRoutes } from "./admin.routes";
import ProtextedRoute from "../layouts/ProtextedRoute";
import ProductDetails from "../pages/allProducts/ProductDetails";
import CheckOut from "../pages/allProducts/CheckOut";
import Success from "../pages/allProducts/Success";
import Failed from "../pages/allProducts/Failed";
import Cancel from "../pages/allProducts/Cancel";
import Service from "../pages/service/Service";

// let user;
// const DashboardRoutes = () => {
//   const token = useAppSelector(selectCurrenttoken);
//   user = token ? VerifyToken(token) : null;
//   console.log(user);

//   return <SideBar></SideBar>;
// };

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
      {
        path: "service",
        element: <Service></Service>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>
      }
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
  {
    path:"/customer/checkout",
    element: <ProtextedRoute role="customer"><CheckOut></CheckOut></ProtextedRoute>
  },
  {
    path:"/success",
    element: <ProtextedRoute role="customer"><Success></Success></ProtextedRoute>
  },
  {
    path:"/fail",
    element: <ProtextedRoute role="customer"><Failed></Failed></ProtextedRoute>
  },
  {
    path:"/cancel",
    element: <ProtextedRoute role="customer"><Cancel></Cancel></ProtextedRoute>
  }
]);
