import { Link } from "react-router-dom";
import { NavLogo } from "../assets";
import HopeButton from "./HopeButton";
import useAuth from "../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DropDown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false); // Close the dropdown after navigating
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-transparent cursor-pointer"
      >
        <span>More ▼</span>
      </div>
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-[10rem] z-30">
          <button
            onClick={() => handleNavigation("/request-help")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            Request Help
          </button>
          <button
            onClick={() => handleNavigation("/create-event")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            Create Volunteering Campaign
          </button>
          <button
            onClick={() => handleNavigation("/our-donors")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            Our Donors
          </button>
          <button
            onClick={() => handleNavigation("/FAQs")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            FAQs
          </button>
          <button
            onClick={() => handleNavigation("/about-us")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            About Us
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <nav className="w-full bg-lblue px-8 flex items-center justify-between">
      <div className="w-[10%]">
        <img src={NavLogo} className="aspect-square" />
      </div>
      <div className="flex items-center justify-end gap-8 flex-grow mr-8">
        <Link to="/donations">
          <HopeButton
            text="Donation Gatherings"
            className="rounded-full px-4 py-1 font-normal"
          />
        </Link>
        <Link to="/programs">
          <HopeButton
            text="Volunteering Programs"
            className="rounded-full px-4 py-1 font-normal"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-8">
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        <DropDown />
        <select className="px-4 py-2 bg-transparent cursor-pointer">
          <option value="en">English</option>
        </select>
        {isAuthenticated ? (
          <Link to={`/profile/${user?.id}`}>
            {user?.profilePicURL ? (
              <img src={user.profilePicURL} className="size-8 rounded-full" />
            ) : (
              <CgProfile className="size-8 cursor-pointer" />
            )}
          </Link>
        ) : (
          <Link to="/login">
            <HopeButton text="Login" className="bg-transparent text-dblue" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
