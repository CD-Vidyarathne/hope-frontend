import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import HopeButton from "../components/HopeButton.tsx";
import { Elders } from "../assets/index.ts";
import api from "../config/axios.ts";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    gender: "",
    nic: "",
    birthDate: "",
    phone: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await api.post("/auth/signup", {
        ...formData,
        role: "normal",
      });
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-gradient-to-b from-[#B6CAF2] to-[#FCFCFC] flex justify-center items-center">
        <div className="w-3/4 h-3/4 bg-gray-300 rounded-md shadow-lg">
          <img
            src={Elders}
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
        <form onSubmit={handleSubmit} className="w-3/4 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="text"
            name="nic"
            placeholder="NIC"
            value={formData.nic}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 mb-4 border bg-wblue shadow-md border-gray-300 rounded-md"
          />
          <HopeButton text="SIGN UP" className="w-1/3 py-3 mt-4 self-center" />
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
