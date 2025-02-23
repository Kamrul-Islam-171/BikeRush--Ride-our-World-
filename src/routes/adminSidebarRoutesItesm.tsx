import React from "react";
import {
  HomeOutlined,
  ProductOutlined,
  PlusCircleOutlined,
  DatabaseOutlined,
  TeamOutlined,
  PoweroffOutlined,
  StockOutlined,

  ShoppingCartOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../redux/features/hook";

import { logOut } from "../redux/features/auth/AuthSlice";

export const AdminSidebarItems = (role: string) => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut())
  }
  const adminRoutesItems = [
    {
      key: "Logo",
      // icon: React.createElement(UserOutlined),
      label: (
        <NavLink to={`/`} className="text-3xl font-bold">
         BikeRush
        </NavLink>
      ),
    },
    {
      key: "Over View",
      icon: <StockOutlined />,
      label: <NavLink to={`/${role}`}>Over View</NavLink>,
    },
    // {
    //   key: "My Orders",
    //   icon: React.createElement(CheckCircleOutlined),
    //   label: <NavLink to={`${role}/my-order`}>My Orders</NavLink>,
    // },
    // {
    //   key: "All Orders",
    //   icon: React.createElement(UserOutlined),
    //   label: <NavLink to={`${role}/all-orders`}>All Orders</NavLink>,
    // },
    // {
    //   key: "Canceled Orders",
    //   icon: React.createElement(UserOutlined),
    //   label:"Canceled Orders",
    //   children: [
    //     {
    //         key: "blocked Orders",
    //         icon: React.createElement(UserOutlined),
    //         label: <NavLink to={`${role}/all-orders`}>Blocked</NavLink>,
    //       },
    //   ]
    // },
    {
      key: "Manage Product",
      icon: React.createElement(ProductOutlined),
      label: "Manage Product",
      children: [
        {
          key: "Create",
          icon: <PlusCircleOutlined />,
          label: <NavLink to={`all-new-product`}>Add New</NavLink>,
        },
        {
          key: "All Products",
          icon: <DatabaseOutlined />,
          label: <NavLink to={`all-products`}>All Products</NavLink>,
        },
      ],
    },
    {
      key: "All Customers",
      icon: <TeamOutlined />,
      label: <NavLink to={`all-customers`}>All Customers</NavLink>,
    },
    {
      key: "Managea Orders",
      icon: <ShoppingCartOutlined />,
      label: <NavLink to={`manage-orders`}>Manage Orders</NavLink>,
    },
    {
      key: "Home",
      icon: React.createElement(HomeOutlined),
      label: <NavLink to={`/`}>Home</NavLink>,
    },
    // {
    //   key: "LogOut",
    //   // icon: React.createElement(HomeOutlined),
    //   label: <Button className="w-full bg-indigo-600 border-0 hover:bg-indigo-500 text-white transition duration-300 " onClick={handleLogOut}>Logout</Button>
    // },
    {
      key: "LogOut",
      icon: React.createElement(PoweroffOutlined),
      label: (
        <span
          className=" transition duration-300"
          onClick={handleLogOut}
        >
          Logout
        </span>
      ),
    },
  ];
  return adminRoutesItems;
};
