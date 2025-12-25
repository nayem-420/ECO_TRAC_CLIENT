import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Logo from "../../Shared/Logo";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Swal from "sweetalert2";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Registers = () => {
  const { setUser, registerUser, updateUserProfile, loading } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value || "https://via.placeholder.com/150";
    const password = form.password.value;

    if (password.length < 6) {
      Swal.fire("Error", "Password must be at least 6 characters", "error");
      return;
    }

    try {
      // Register user
      const result = await registerUser(email, password);
      const user = result.user;

      // Update profile with name and photo URL
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      });

      // Update local user state
      setUser({
        ...user,
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration Successful!",
        text: `Welcome ${name}! 🌿`,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
      form.reset();
      navigate("/");
    } catch (error) {
      console.error("Firebase Error:", error.message);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/sd5F0N1F/Developing-Eco-Friendly-Apps-Best-Practices-and-Case-Studies-778875412.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content relative z-10">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg">
          <div className="flex justify-end mb-4">
            <Link to={"/"}>
              <Logo></Logo>
            </Link>
          </div>

          <h2 className="text-3xl text-green-500 font-bold mb-2">Register</h2>
          <p className="text-white/95 mb-6">
            Register to try our amazing services
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-black font-medium">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-black font-medium">Email</span>
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
                <span className="label-text text-black font-medium">
                  Profile Photo URL (Optional)
                </span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="https://example.com/your-photo.jpg"
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text-alt text-gray-600">
                  Paste your image URL here
                </span>
              </label>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-black font-medium">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Enter password (min 6 characters)"
                  className="input input-bordered w-full pr-12"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xl cursor-pointer text-gray-500 hover:text-green-600"
                >
                  {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>

            <p className="text-sm text-white/90">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-semibold underline cursor-pointer text-green-400 hover:text-green-300"
              >
                Login
              </Link>
            </p>

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <div className="divider my-6 text-white/80">OR</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Registers;
