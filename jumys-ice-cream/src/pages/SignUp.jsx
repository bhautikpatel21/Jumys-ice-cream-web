import React, { useState } from "react";
import LoginImg2 from "../assets/asset 49.jpeg";
import { GoEye, GoEyeClosed } from "react-icons/go";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-100">
      <div className="relative max-w-md w-full bg-white shadow-lg rounded-lg border border-gray-200 p-6 md:p-8">
        <div className="flex justify-center mb-6">
          <img
            id="logo"
            className="w-24 md:w-40"
            src={LoginImg2}
            alt="Login Illustration"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
          Sign Up
        </h2>

        <form action="#" method="POST">
          <div className="space-y-5">
            <div>
              <input
                id="email"
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-full text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                type="email"
                placeholder="Email*"
                required
              />
            </div>
            <div className="relative">
              <input
                id="password"
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-full text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                type={showPassword ? "text" : "password"}
                placeholder="Password*"
                required
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <GoEyeClosed size={20} /> : <GoEye size={20} />}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-12 bg-black text-white rounded-full font-semibold hover:bg-red-600 transition duration-300"
              >
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold text-red-600 hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
