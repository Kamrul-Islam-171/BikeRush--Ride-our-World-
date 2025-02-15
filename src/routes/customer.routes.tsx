import AllOrders from "../pages/customar/AllOrders";
import MyOrders from "../pages/customar/MyOrders";
import CustomerProfile from "../pages/customar/Profile";



export const customerRoutes = [
  {
    index: true,
    element: <MyOrders></MyOrders>,
  },
  {
    path: "customer/my-order",
    element: <MyOrders></MyOrders>,
  },
  {
    path: "customer/all-orders",
    element: <AllOrders></AllOrders>,
  },
  {
    path: "customer/profile",
    element: <CustomerProfile></CustomerProfile>,
  },
];
