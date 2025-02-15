import React from "react";
import { HomeOutlined, UserOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export const CustomarSidebarItems = (role: string) => {
  const customarRoutesItems = [
    {
        key: "Logo",
        // icon: React.createElement(UserOutlined),
        label: <NavLink to={`/`} className='text-3xl font-bold'>Logo</NavLink>,
    },
    {
      key: "My Orders",
      icon: React.createElement(CheckCircleOutlined),
      label: <NavLink to={`${role}/my-order`}>My Orders</NavLink>,
    },
    {
      key: "All Orders",
      icon: React.createElement(UserOutlined),
      label: <NavLink to={`${role}/all-orders`}>All Orders</NavLink>,
    },
    {
      key: "Canceled Orders",
      icon: React.createElement(UserOutlined),
      label:"Canceled Orders",
      children: [
        {
            key: "blocked Orders",
            icon: React.createElement(UserOutlined),
            label: <NavLink to={`${role}/all-orders`}>Blocked</NavLink>,
          },
      ]
    },
    {
      key: "Profile",
      icon: React.createElement(UserOutlined),
      label: <NavLink to={`${role}/profile`}>Profile</NavLink>,
    },
    {
        key: "Home",
        icon: React.createElement(HomeOutlined),
        label: <NavLink to={`/`}>Home</NavLink>,
    },
  ];
  return customarRoutesItems;
};
