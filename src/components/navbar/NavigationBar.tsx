import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Menu, Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/features/hook";
import {
  logOut,
  selectCurrenttoken,
} from "../../redux/features/auth/AuthSlice";
import { MenuOutlined } from "@ant-design/icons";
import { VerifyToken } from "../../utils/verifyToken";
import { TUserRole } from "../../layouts/SideBar";

const NavigationBar = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectCurrenttoken);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  let user;
  if (token) {
    user = VerifyToken(token);
  }
  const role = (user as TUserRole)?.role;

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-4 shadow-md">
      <div className="flex items-center gap-1">
        <div className="w-[40px] h-[40px]">
        <img src="https://res.cloudinary.com/dtp5fwvg9/image/upload/v1739806738/bikerush_evxj9d.png" alt="" />
        </div>
      <div className="text-2xl font-bold text-indigo-400">Bike<span className="text-white">Rush</span></div>
      </div>

      <div className="block md:hidden">
        <MenuOutlined
          onClick={showDrawer}
          style={{ fontSize: "24px", color: "white" }}
        />
      </div>

      <ul className="hidden md:flex space-x-6">
        {["Home", "All Products", "About"].map((item, index) => (
          <li key={index}>
            <NavLink
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className={({ isActive }) =>
                `hover:text-indigo-400 transition duration-300 ${
                  isActive ? "text-indigo-500 font-semibold" : ""
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
        {role && (
          <li>
            <NavLink
              to={`${role}`}
              className={({ isActive }) =>
                `hover:text-indigo-400 transition duration-300 ${
                  isActive ? "text-indigo-500 font-semibold" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        )}
      </ul>

      <div className="hidden md:flex space-x-4">
        {!token && (
          <Button
            className="bg-indigo-600 hover:bg-indigo-500 text-white transition duration-300"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}
        {!token && (
          <Button
            className="bg-gray-700 hover:bg-gray-600 text-white transition duration-300"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        )}
        {token && (
          <Button
            className="bg-indigo-600 hover:bg-indigo-500 text-white transition duration-300"
            onClick={handleLogOut}
          >
            LogOut
          </Button>
        )}
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={visible}
        width={250}
      >
        <Menu mode="vertical">
          {["Home", "All Products", "About"].map((item, index) => (
            <Menu.Item key={index}>
              <NavLink
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "-")}`
                }
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition duration-300 ${
                    isActive ? "text-indigo-500 font-semibold" : ""
                  }`
                }
                onClick={onClose}
              >
                {item}
              </NavLink>
            </Menu.Item>
          ))}
          {role && (
            <Menu.Item key="dashboard">
              <NavLink
                to={`/${role}`}
                className={({ isActive }) =>
                  `hover:text-indigo-400 transition duration-300 ${
                    isActive ? "text-indigo-500 font-semibold" : ""
                  }`
                }
                onClick={onClose}
              >
                Dashboard
              </NavLink>
            </Menu.Item>
          )}
        </Menu>
        <div className="flex flex-col space-y-4 mt-4">
          {!token && (
            <Button
              className="bg-indigo-600 hover:bg-indigo-500 text-white transition duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
          {!token && (
            <Button
              className="bg-gray-700 hover:bg-gray-600 text-white transition duration-300"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          )}
          {token && (
            <Button
              className="bg-indigo-600 hover:bg-indigo-500 text-white transition duration-300"
              onClick={handleLogOut}
            >
              LogOut
            </Button>
          )}
        </div>
      </Drawer>
    </nav>
  );
};

export default NavigationBar;
