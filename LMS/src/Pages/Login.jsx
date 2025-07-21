import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layout/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await dispatch(login(loginData));

    if (response?.payload?.success) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error(response.payload.message || "Login failed");
    }

    setLoginData({ email: "", password: "" });
  };

  return (
    <HomeLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
        <form
          onSubmit={onLogin}
          noValidate
          className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-5 border border-white/20"
        >
          <h2 className="text-3xl font-bold text-white text-center">Login</h2>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleUserInput}
              value={loginData.email}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-white font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Enter your password"
              className="px-3 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleUserInput}
              value={loginData.password}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Login
          </button>

          <div className="text-center text-sm text-white">
            <Link to="/forgot-password" className="hover:underline text-blue-400">
              Forgot Password?
            </Link>
          </div>

          <p className="text-center text-sm text-white">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
