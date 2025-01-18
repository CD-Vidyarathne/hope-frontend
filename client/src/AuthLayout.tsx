import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const AuthLayout = () => {
  return (
    <div className="max-w-[100%] h-screen flex flex-col">
      <section className="w-full flex-grow">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default AuthLayout;
