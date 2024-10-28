import { resetpw } from "../assets/index";
import AuthImage from "../components/AuthImage";
import AuthInputs from "../components/AuthInputs";

function ResetPasswordPage() {
  return (
    <section className="flex flex-col lg:flex-row h-screen">
      <AuthImage imageSrc={resetpw} className="hidden lg:block lg:w-[60%]" />
      <AuthInputs
        topic="Login"
        buttonText="Sign in"
        className="w-full h-full lg:w-[40%]"
      >
        <input
          type="email"
          placeholder="username@gmail.com"
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-main mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-main mb-2"
        />
      </AuthInputs>
    </section>
  );
}

export default ResetPasswordPage;
