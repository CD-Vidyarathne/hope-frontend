import HopeButton from "./HopeButton";
import { FaInstagram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-lblue pt-8 pb-2">
      <div className="w-[75%] flex mx-auto items-center justify-between gap-12">
        <div className="w-[25%]">
          <p>Be in the know</p>
          <p>if you want to be touch with us please enter your email here.</p>
        </div>
        <div className="w-[25%] flex flex-col items-center gap-4">
          <input
            typeof="email"
            placeholder="Email"
            className="w-full rounded-full p-1 px-2"
          />
          <HopeButton
            text="Submit"
            className="text-black bg-white w-[40%] py-1"
          />
        </div>
        <div className="w-[25%] ml-4">
          <p>Help</p>
          <a href="hello@hope.com">hello@hope.com</a>
          <p className="font-bold">OUR DONORS</p>
        </div>
        <div className="w-[25%]">
          <p>Follow us on Social Media</p>
          <div className="flex gap-4 mt-4">
            <FaInstagram className="size-6" />
            <FaFacebook className="size-6" />
          </div>
        </div>
      </div>
      <p className="w-full text-xs text-center mt-4">
        Copyright© 2025 by CYAT
      </p>
    </footer>
  );
};

export default Footer;
