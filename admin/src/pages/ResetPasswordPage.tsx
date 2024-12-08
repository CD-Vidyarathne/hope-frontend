import React from "react";
import { resetpw } from "../assets/index";
import AuthImage from "../components/AuthImage";
import AuthInputs from "../components/AuthInputs";

const ResetPasswordPage: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen">
      <AuthImage imageSrc={resetpw} className="hidden lg:block lg:w-[60%]" />
      <AuthInputs
        topic="Reset Password"
        buttonText="Update Password"
        className="w-full h-full lg:w-[40%]"
      >
        <p className="text-white font-bold mb-1">New Password</p>
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-main mb-2"
        />
        <p className="text-white font-bold mb-1">Confirm New Password</p>
        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-main mb-2"
        />
      </AuthInputs>
    </section>
  );
};

export default ResetPasswordPage;
