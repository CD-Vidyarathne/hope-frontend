import { useEffect, useState } from "react";
import { FiSidebar } from "react-icons/fi";
import { MdNotifications, MdNotificationAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

interface TopbarProps {
  toggleMenu: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleMenu }) => {
  const [notifications, setNotifications] = useState<string[]>();
  const [unreadNotfications, setUnreadNotifications] = useState<string[]>();
  useEffect(() => {
    setNotifications(["1"]);
  }, []);

  useEffect(() => {
    setUnreadNotifications(notifications?.filter((n) => n));
  }, [notifications]);

  return (
    <div className="z-20 w-full fixed h-[50px] bg-main text-white flex items-center justify-end md:justify-between pr-8 text-2xl">
      <button
        onClick={toggleMenu}
        className="text-2xl hidden md:block py-2 px-4"
      >
        <FiSidebar />
      </button>
      <div className="flex items-center fixed justify-center gap-8 right-10">
        {unreadNotfications && unreadNotfications.length > 0 ? (
          <MdNotificationAdd />
        ) : (
          <MdNotifications />
        )}
        {/* <MdNotifications /> */}
        <CgProfile />
      </div>
    </div>
  );
};

export default Topbar;
