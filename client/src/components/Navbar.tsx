import { NavLogo } from "../assets";
import HopeButton from "./HopeButton";
const Navbar = () => {
  return (
    <nav className="w-full bg-lblue px-8 flex items-center justify-between">
      <div className="w-[10%]">
        <img src={NavLogo} className="aspect-square" />
      </div>
      <div className="flex items-center justify-between gap-8">
        <HopeButton text="Donation Gatherings" className="rounded-full" />
        <HopeButton text="Voulenteering Programs" className="rounded-full" />
      </div>
      <div className="flex items-center justify-between gap-8">
        <p className="cursor-pointer">Home</p>
        <select className="px-4 py-2 bg-transparent max-w-[6rem] cursor-pointer">
          <option value={0}>More</option>
          <option value={0}>Request Help</option>
          <option value={0}>Create Voulenteering Campaign</option>
          <option value={0}>Our Donors</option>
          <option value={0}>FAQs</option>
          <option value={0}>About Us</option>
        </select>
        <select className="px-4 py-2 bg-transparent cursor-pointer">
          <option value="en">English</option>
        </select>
        <HopeButton text="Login" className="bg-transparent text-dblue" />
      </div>
    </nav>
  );
};

export default Navbar;
