import { Link } from "react-router-dom";
import { loginImg } from "../assets/index";
import AuthImage from "../components/AuthImage";
import AuthInputs from "../components/AuthInputs";

function LoginPage() {
  return (
    <section className="flex flex-col lg:flex-row h-screen">
      <AuthImage imageSrc={loginImg} className="hidden lg:block lg:w-[60%]" />
      <AuthInputs
        topic="Login"
        buttonText="Sign in"
        className="w-full h-full lg:w-[40%]"
      >
        <p className="text-white font-bold mb-1">Email</p>
        <input
          type="email"
          placeholder="username@gmail.com"
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-main mb-2"
        />
        <p className="text-white font-bold mb-1">Password</p>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-main mb-2"
        />
        <Link
          to="/forgot-password"
          className="text-sm text-main hover:text-main hover:underline"
        >
          Forgot Password?
        </Link>
      </AuthInputs>
    </section>
  );
}

export default LoginPage;
