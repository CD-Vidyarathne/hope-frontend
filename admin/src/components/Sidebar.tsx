import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaCalendarAlt,
  FaUserAlt,
  FaDollarSign,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";
import { logo } from "../assets";

const links = [
  { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
  { name: "Requests", path: "/requests", icon: <FaFileAlt /> },
  { name: "Events", path: "/events", icon: <FaCalendarAlt /> },
  { name: "Profile Manage", path: "/profile", icon: <FaUserAlt /> },
  { name: "Transaction", path: "/transaction", icon: <FaDollarSign /> },
  { name: "Analysis", path: "/analysis", icon: <FaChartLine /> },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-main text-white fixed md:w-[20%] md:h-[100vh] md:static flex flex-col z-20">
      <div className="flex items-center justify-between px-4  md:hidden h-[70px]">
        <img src={logo} alt="Hope Admin Logo" className={`h-full`} />
        <button onClick={toggleMenu} className="text-2xl py-2 px-4">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`flex-col h-full items-center justify-evenly space-y-4 px-4 py-6 md:py-0 md:flex ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="hidden md:block">
          <img
            src={logo}
            alt="Hope Admin Logo"
            className={`max-w-[80%] mx-auto mb-3`}
          />
          <hr className="border-t border-gray-400 mt-2" />
        </div>
        <div className="flex flex-col space-y-4 w-full items-center gap-6 text-lg ">
          <div className="h-50px w-full md:hidden"></div>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center text-white text-lg hover:text-gray-300 hover:scale-105`}
            >
              <span className="mr-3">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <button className="mt-auto flex items-center text-white hover:text-gray-300">
          <FaSignOutAlt className="mr-3" />
          <span className="text-2xl font-bold">Log Out</span>
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;
