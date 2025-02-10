import React from "react";
import { HomeOutlined, UserOutlined, CheckCircleOutlined, ProductOutlined, PlusCircleOutlined, DatabaseOutlined, TeamOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export const AdminSidebarItems = (role: string) => {
  const adminRoutesItems = [
    {
        key: "Logo",
        // icon: React.createElement(UserOutlined),
        label: <NavLink to={`/`} className='text-3xl font-bold'>Logo</NavLink>,
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
      key:"Manage Product",
      icon: React.createElement(ProductOutlined),
      label:"Manage Product",
      children: [
        {
          key:"Create",
          icon: <PlusCircleOutlined />,
          label: <NavLink to={`all-new-product`}>Add New</NavLink>,
        },
        {
          key:"All Products",
          icon: <DatabaseOutlined />,
          label:<NavLink to={`all-products`}>All Products</NavLink>,
        }
      ]
    },
    {
        key: "All Customers",
        icon: <TeamOutlined />,
        label: <NavLink to={`all-customers`}>All Customers</NavLink>,
    },
    {
        key: "Home",
        icon: React.createElement(HomeOutlined),
        label: <NavLink to={`/`}>Home</NavLink>,
    },
  ];
  return adminRoutesItems;
};
