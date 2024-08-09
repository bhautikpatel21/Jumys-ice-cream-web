import React, { useState } from "react";
// import LoginImg from "../assets/asset49.jpeg";
import LoginImg2 from "../assets/asset 49.jpeg";
import { GoEye, GoEyeClosed } from "react-icons/go";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex border-2 border-green-600 items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md p-2 border-2 border-red-600">
        <img
          id="logo"
          className="w-[200%]"
          src={LoginImg2}
          alt="Not Found"
        />
        <h2 className="text-2xl font-bold leading-tight text-black sm:text-2xl absolute inset-[455px] top-[330px] font-serif">
          Sign up
        </h2>

        <form action="#" method="POST" className="mt-7">
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="text-base font-medium text-gray-900"></label>
              <div className="mt-2">
                <input
                  id="email"
                  className="flex h-10 w-full border border-gray-300 bg-transparent px-3 py-4 text-base placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 rounded-full"
                  type="text"
                  placeholder="Email*"
                />
              </div>
            </div>
            <div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  className="flex h-10 w-full rounded-full border border-gray-300 bg-transparent px-3 py-4 text-base placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password*"
                />
                <div className="flex absolute right-4 bottom-4 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <GoEyeClosed /> : <GoEye />}
                </div>
              </div>
              <div className="flex items-center justify-between float-start my-3">
                <label htmlFor="password" className="text-base font-medium text-gray-900"></label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gray-950 hover:bg-red-600 px-3.5 py-2.5 font-semibold leading-7 text-white"
              >
                Sign Up
              </button>
            </div>
            <p className="mt-3 text-sm text-red-600 text-center">
              Already has an account?{" "}
              <a
                href="#"
                title=""
                className="font-semibold text-gray-950 hover:text-red-600 underline"
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