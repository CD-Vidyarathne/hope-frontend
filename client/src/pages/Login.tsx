import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import HopeButton from "../components/HopeButton.tsx";
import { Children } from "../assets/index.ts";
import api from "../config/axios.ts";
import { AuthContext } from "../context/AuthContext.tsx";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.id;

      api
        .get(`/users/${userId}`)
        .then((response) => {
          const user = response.data;
          login(user);
          navigate("/");
        })
        .catch((error) => {
          console.error("Failed to fetch user details:", error);
        });
    }
  }, [login, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", formData);
      const { token, user } = response.data;

      if (response.status === 200) {
        localStorage.setItem("token", token);
        login(user);

        console.log("Login successful:", response.data);
        navigate("/");
      } else {
        console.log("Login Failed", response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-gradient-to-b from-[#B6CAF2] to-[#FCFCFC] flex justify-center items-center">
        <div className="w-3/4 h-3/4 bg-gray-300 rounded-md shadow-lg">
          <img
            src={Children}
            alt="Placeholder"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl mb-2 font-bold italic">HELLO</h1>
        <p className="text-lg mb-16 italic">
          Login to continue your journey of kindness and support.
        </p>
        <form onSubmit={handleSubmit} className="w-3/4 flex flex-col gap-4">
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
          <HopeButton text="LOG IN" className="w-1/3 py-3 mt-4 self-center" />
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
