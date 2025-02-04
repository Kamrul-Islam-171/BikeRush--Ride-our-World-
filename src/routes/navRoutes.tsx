import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about/About";
import AllProducts from "../pages/allProducts/AllProducts";
import HomeContent from "../pages/home/HomeContent";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      children: [
        {
          index:true,
          element: <HomeContent></HomeContent>
        },
        {
          path: "all-products",
          element: <AllProducts></AllProducts>
        },
        {
          path: "about",
          element: <About></About>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
  ]);