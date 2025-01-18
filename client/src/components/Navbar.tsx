import { Link } from "react-router-dom";
import { NavLogo } from "../assets";
import HopeButton from "./HopeButton";
import useAuth from "../hooks/useAuth";
import { CgProfile } from "react-icons/cg";

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
        <select className="px-4 py-2 bg-transparent max-w-[6rem] cursor-pointer">
          <option value={0}>More</option>
          <option value={0}>Request Help</option>
          <option value={0}>Create Volunteering Campaign</option>
          <option value={0}>Our Donors</option>
          <option value={0}>FAQs</option>
          <option value={0}>About Us</option>
        </select>
        <select className="px-4 py-2 bg-transparent cursor-pointer">
          <option value="en">English</option>
        </select>
        {isAuthenticated ? (
          <Link to={`/profile/${user?.id}`}>
            <CgProfile className="size-6 cursor-pointer" />
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
