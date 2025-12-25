import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../Shared/Logo";
import useAuth from "../../hooks/useAuth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome back, ${
            result.user.displayName || result.user.email
          }!`,
          timer: 2000,
          showConfirmButton: false,
          toast: true,
          position: "top-end",
        });

        form.reset();
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        let errorMessage = "Login failed!";
        if (error.code === "auth/user-not-found") {
          errorMessage = "No user found with this email!";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password!";
        } else if (error.code === "auth/invalid-credential") {
          errorMessage = "Invalid email or password!";
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      })
  };

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
          <h2 className="text-3xl text-green-500 font-bold mb-2">Login</h2>
          <p className="text-white/95 mb-6">We are glad to see you again !</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  className="input input-bordered w-full pr-12"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3 text-xl cursor-pointer text-gray-500 hover:text-green-600"
                >
                  {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                ></button>
              </div>
            </div>
            <div>
              <Link to={"/forget-password"} className="link link-hover">
                Forgot password?
              </Link>
            </div>

            <p className="mt-8 text-sm">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className="font-semibold underline cursor-pointer"
              >
                Register
              </Link>
            </p>
            <button className="btn btn-primary w-full">Login</button>
          </form>

          <div className="divider my-6">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
