import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../Shared/Logo";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire(
              "Logged out!",
              "You have been successfully logged out.",
              "success"
            );
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(
              "Error!",
              "Something went wrong while logging out.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/challenges">Challenges</NavLink>
            </li>
            <li>
              <NavLink to="/my-activities">My Activities</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <Logo></Logo>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/challenges">Challenges</NavLink>
          </li>
          <li>
            <NavLink to="/my-activities">My Activities</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <>
            {/* Profile Photo Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt={user?.displayName || "User"}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
              >
                <li className="menu-title">
                  <span className="text-green-700 font-bold">
                    {user?.displayName || "User"}
                  </span>
                </li>
                <li>
                  <a className="text-sm text-gray-600 pointer-events-none">
                    {user?.email}
                  </a>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <NavLink to="/my-activities">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    My Activities
                  </NavLink>
                </li>
                <li>
                  <a onClick={handleLogout} className="text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
