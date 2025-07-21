import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layout/HomeLayout";
import { createAccount } from "../Redux/Slices/AuthSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState("");
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const getImage = (e) => {
    const image = e.target.files[0];
    if (image) {
      setSignupData({ ...signupData, avatar: image });

      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => setPreviewImage(reader.result);
    }
  };

  async function createNewAccount(e) {
    e.preventDefault();

    const { fullName, email, password, avatar } = signupData;

    if (!fullName || !email || !password || !avatar) {
      toast.error("Please fill all the fields");
      return;
    }

    if (fullName.length < 5) {
      toast.error("Name should be at least 5 characters");
      return;
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      toast.error("Invalid Email");
      return;
    }

    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      toast.error("Password must be at least 8 characters and contain one letter and one number");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const response = await dispatch(createAccount(formData));

    if (response?.payload?.success) {
      toast.success("Account created successfully");
      navigate("/");
    }

    setSignupData({
      fullName: "",
      email: "",
      password: "",
      avatar: "",
    });
    setPreviewImage("");
  }

  return (
    <HomeLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 px-4">
        <form
          onSubmit={createNewAccount}
          noValidate
          className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-5 border border-white/20 text-white"
        >
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>

          <label htmlFor="image_uploads" className="cursor-pointer flex justify-center">
            {previewImage ? (
              <img
                src={previewImage}
                alt="avatar preview"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 text-white opacity-80" />
            )}
          </label>
          <input
            className="hidden"
            type="file"
            name="image_uploads"
            id="image_uploads"
            accept=".png, .jpg, .jpeg, .svg"
            onChange={getImage}
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="font-semibold">Full Name</label>
            <input
              type="text"
              required
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
              className="px-3 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleUserInput}
              value={signupData.fullName}
            />

            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleUserInput}
              value={signupData.email}
            />

            <label htmlFor="password" className="font-semibold">Password</label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Create a strong password"
              className="px-3 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleUserInput}
              value={signupData.password}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Signup;
