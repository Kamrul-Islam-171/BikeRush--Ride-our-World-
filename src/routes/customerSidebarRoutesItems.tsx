import React from "react";
import { HomeOutlined, UserOutlined, CheckCircleOutlined, PoweroffOutlined, StockOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../redux/features/hook";
import { logOut } from "../redux/features/auth/AuthSlice";

export const CustomarSidebarItems = (role: string) => {
  const dispatch = useAppDispatch();
    const handleLogOut = () => {
      dispatch(logOut())
    }
  const customarRoutesItems = [
    {
        key: "Logo",
        // icon: React.createElement(UserOutlined),
        label: <NavLink to={`/`} className='text-3xl font-bold'>BikeRush</NavLink>,
    },
    {
      key: "OverView",
      icon: React.createElement(StockOutlined),
      label: <NavLink to={`/${role}`}>Over View</NavLink>,
    },
    {
      key: "My Orders",
      icon: React.createElement(CheckCircleOutlined),
      label: <NavLink to={`/${role}/my-order`}>My Orders</NavLink>,
    },
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
      key: "Profile",
      icon: React.createElement(UserOutlined),
      label: <NavLink to={`/${role}/profile`}>Profile</NavLink>,
    },
    {
        key: "Home",
        icon: React.createElement(HomeOutlined),
        label: <NavLink to={`/`}>Home</NavLink>,
    },
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
  return customarRoutesItems;
};
