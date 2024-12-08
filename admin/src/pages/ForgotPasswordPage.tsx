import React from "react";
import { forgotpw } from "../assets/index";
import AuthImage from "../components/AuthImage";
import AuthInputs from "../components/AuthInputs";
import HopeButton from "../components/HopeButton";

const ForgotPasswordPage: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen">
      <AuthImage imageSrc={forgotpw} className="hidden lg:block lg:w-[60%]" />
      <AuthInputs
        topic="Forgot Password"
        buttonText="Sign in"
        className="w-full h-full lg:w-[40%]"
      >
        <p className="text-white font-bold mb-1">Email</p>
        <div className="flex justify-center items-center gap-2 mb-4">
          <input
            type="email"
            placeholder="username@gmail.com"
            className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-main"
          />
          <HopeButton text="Send" className="w-[70px]" onClick={() => {}} />
        </div>
        <p className="text-white font-bold mb-1">OTP Code</p>
        <input
          type="text"
          placeholder="Enter OTP Code"
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-main mb-4"
        />
      </AuthInputs>
    </section>
  );
};

export default ForgotPasswordPage;
