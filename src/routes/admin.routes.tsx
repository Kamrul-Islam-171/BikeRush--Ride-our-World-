import AllCustomers from "../pages/admin/AllCustomers";
import CreateNewProduct from "../pages/admin/CreateNewProduct";
import AllProducts from "../pages/allProducts/AllProducts";
import AllOrders from "../pages/customar/AllOrders";

export const adminRoutes = [
    {
        index: true,
        element:<AllOrders></AllOrders>
    },
    {
        path: 'all-customers',
        element: <AllCustomers></AllCustomers>
    },
    {
        path: 'all-new-product',
        element: <CreateNewProduct></CreateNewProduct>
    },
    {
        path: 'all-products',
        element: <AllProducts></AllProducts>
    },
];

