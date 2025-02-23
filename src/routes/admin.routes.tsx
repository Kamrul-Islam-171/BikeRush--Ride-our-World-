import AllCustomers from "../pages/admin/AllCustomers";
import AllProducts from "../pages/admin/AllProduct";
import CreateNewProduct from "../pages/admin/CreateNewProduct";

import AllOrders from "../pages/customar/AllOrders";
import MangerOrders from './../pages/admin/MangerOrders';

export const adminRoutes = [
  {
    index: true,
    element: <AllOrders></AllOrders>,
  },
  {
    path: "all-customers",
    element: <AllCustomers></AllCustomers>,
  },
  {
    path: "all-new-product",
    element: <CreateNewProduct></CreateNewProduct>,
  },
  {
    path: "all-products",
    element: <AllProducts></AllProducts>,
  },
  {
    path: "manage-orders",
    element: <MangerOrders></MangerOrders> ,
  },
];
