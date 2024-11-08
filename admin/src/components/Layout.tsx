import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import { useState } from "react";

function Layout() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex w-full h-full">
      {isOpen && <Sidebar />}
      <div
        className={`mt-[70px] w-[100%] h-full overflow-y-auto md:${isOpen ? "w-[80%]" : "w-[100%]"} md:mt-0`}
      >
        <Topbar toggleMenu={toggleMenu} />
        <div className="mt-[50px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
