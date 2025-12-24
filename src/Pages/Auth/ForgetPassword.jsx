import React from 'react';
import { Link } from 'react-router';
import Logo from '../../Shared/Logo';

const ForgetPassword = () => {
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
            <h2 className="text-3xl text-green-500 font-bold mb-2">Forgot Password?</h2>
            <p className="text-white/95 mb-6">
              No worries, we'll send you reset instructions
            </p>

            <form
              className="space-y-4"
            >
              <div>
                <label className="label">
                  <span className="label-text text-black">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              <button className="btn btn-primary w-full">
                Send Reset Link
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="link link-success text-sm">
                ← Back to Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ForgetPassword;