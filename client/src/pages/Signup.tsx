import { Link } from "react-router-dom";
import HopeButton from "../components/HopeButton.tsx"; // Assuming HopeButton is your custom button component
const Signup = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-gradient-to-b from-[#B6CAF2] to-[#FCFCFC] flex justify-center items-center">
        <div className="w-3/4 h-3/4 bg-gray-300 rounded-md shadow-lg">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Placeholder"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl mb-2 font-bold italic">HELLO</h1>
        <p className="text-lg mb-16 italic">
          Signup to begin your journey of kindness and support.
        </p>
        <div className="w-3/4 flex flex-col justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md "
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md "
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
        </div>
        <HopeButton text="SIGN UP" className="w-1/3 py-3 mt-4" />
        <p className="mt-4 text-center">
          Already Have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
