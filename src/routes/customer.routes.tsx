
import MyOrders from "../pages/customar/MyOrders";
import CustomerProfile from "../pages/customar/Profile";
import CustomerOverview from './../pages/customar/CustomerOverview';



export const customerRoutes = [
  {
    index: true,
    element: <CustomerOverview></CustomerOverview>,
  },
  {
    path: "my-order",
    element: <MyOrders></MyOrders>,
  },
  // {
  //   path: "customer/all-orders",
  //   element: <AllOrders></AllOrders>,
  // },
  {
    path: "profile",
    element: <CustomerProfile></CustomerProfile>,
  },
];
