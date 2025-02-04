import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "antd";

const NavBar = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
            {/* Logo */}
            <div className="text-xl font-bold">logo</div>

            {/* Navigation Links */}
            <ul className="flex space-x-6">
                {["Home", "All Products", "About"].map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? "text-green-500 font-semibold" : ""}`
                            }
                        >
                            {item}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Login/Register Buttons */}
            <div className="flex space-x-4">
                <Button type="primary" onClick={() => navigate("/login")}>Login</Button>
                <Button type="default" onClick={() => navigate("/register")}>Register</Button>
            </div>
        </nav>
    );
};

export default NavBar;
