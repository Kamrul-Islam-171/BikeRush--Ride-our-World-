import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Menu, Drawer } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/features/hook';
import { logOut, selectCurrenttoken } from '../../redux/features/auth/AuthSlice';
import { MenuOutlined } from '@ant-design/icons';
import { VerifyToken } from '../../utils/verifyToken';
import { TUserRole } from '../../layouts/SideBar';

const NavBar = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectCurrenttoken);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false); // State for mobile menu visibility
    let user;
    if(token) {
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
        <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
            {/* Logo */}
            <div className="text-xl font-bold">logo</div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="block md:hidden">
                <MenuOutlined onClick={showDrawer} style={{ fontSize: '24px', color: 'white' }} />
            </div>

            {/* Navigation Links for Desktop */}
            <ul className="hidden md:flex space-x-6">
                {['Home', 'All Products', 'About'].map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? 'text-green-500 font-semibold' : ''}`
                            }
                        >
                            {item}
                        </NavLink>
                    </li>
                ))}
                <li >
                        <NavLink
                            to={`${role}`}
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? 'text-green-500 font-semibold' : ''}`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
            </ul>

            {/* Login/Register Buttons for Desktop */}
            <div className="hidden md:flex space-x-4">
                {!token && (
                    <Button type="primary" onClick={() => navigate('/login')}>
                        Login
                    </Button>
                )}
                {!token && (
                    <Button type="default" onClick={() => navigate('/register')}>
                        Register
                    </Button>
                )}
                {token && (
                    <Button type="primary" onClick={handleLogOut}>
                        LogOut
                    </Button>
                )}
            </div>

            {/* Drawer for Mobile Navigation */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                open={visible}
                width={250}
                style={{ padding: '20px' }}
            >
                <Menu mode="vertical">
                    {['Home', 'All Products', 'About', 'Dashboard'].map((item, index) => (
                        <Menu.Item key={index}>
                            <NavLink
                                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                className={({ isActive }) =>
                                    `hover:text-gray-300 ${isActive ? 'text-green-500 font-semibold' : ''}`
                                }
                                onClick={onClose}
                            >
                                {item}
                            </NavLink>
                        </Menu.Item>
                    ))}
                </Menu>
                <div className="flex flex-col space-y-4 mt-4">
                    {!token && (
                        <Button type="primary" onClick={() => navigate('/login')}>
                            Login
                        </Button>
                    )}
                    {!token && (
                        <Button type="default" onClick={() => navigate('/register')}>
                            Register
                        </Button>
                    )}
                    {token && (
                        <Button type="primary" onClick={handleLogOut}>
                            LogOut
                        </Button>
                    )}
                </div>
            </Drawer>
        </nav>
    );
};

export default NavBar;