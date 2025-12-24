import React from "react";
import { Link } from "react-router";
import Logo from "../../Shared/Logo";
import SocialLogin from "./SocialLogin";

const Registers = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/sd5F0N1F/Developing-Eco-Friendly-Apps-Best-Practices-and-Case-Studies-778875412.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg">
        <Link to={"/"} className="absolute top-6 right-6">
          <Logo></Logo>
        </Link>
        <div className="w-full max-w-md">
          <h2 className="text-3xl text-green-500 font-bold mb-2">Register</h2>
          <p className="text-white/95 mb-6">
            Register to try our amazing services
          </p>

          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-black">Profile Photo</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-full pr-12"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                ></button>
              </div>
            </div>

            <p className="mt-8 text-sm">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-semibold underline cursor-pointer"
              >
                Login
              </Link>
            </p>
            <button className="btn btn-primary w-full">Register</button>
          </form>

          <div className="divider my-6">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Registers;
