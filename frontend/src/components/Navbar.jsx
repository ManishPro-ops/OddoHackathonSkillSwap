import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold text-[#3585c2]">SkillSwap</h1>
        </Link>

        {/* Right side options */}
        <div className="flex items-center gap-6">
          {/* Navigation links */}
          <div className="hidden sm:flex items-center gap-6 font-medium text-gray-700">
            <a href="#" className="hover:text-[#3585c2] transition">Home</a>
            <a href="#" className="hover:text-[#3585c2] transition">About</a>
            <a href="#" className="hover:text-[#3585c2] transition">Contact</a>
          </div>

          {/* User Icon or Login Button */}
          {user ? (
            <div className="relative group">
              {/* If user has uploaded profile picture, show that, else show default icon */}
              <img
                src={user.dp || "/default-avatar.png"}
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover border-2 border-[#3585c2] cursor-pointer"
                onClick={() => navigate("/profile")}
              />

              {/* Tooltip on hover (optional) */}
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-44 p-3 hidden group-hover:block z-50">
                <p className="text-sm text-gray-700 font-semibold">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
                <button
                  onClick={handleLogout}
                  className="text-red-500 text-xs mt-2 underline"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="cursor-pointer px-5 py-2 bg-[#3585c2] hover:bg-[#2d6ca1] transition text-white rounded-full">
              Login
            </Link>
          )}

          {/* Hamburger menu for small screens */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="sm:hidden"
          >
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="21" height="1.5" rx=".75" fill="#3585c2" />
              <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#3585c2" />
              <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#3585c2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${
        open ? "flex" : "hidden"
      } flex-col px-5 py-4 bg-white sm:hidden`}>
        <a href="#" className="text-gray-700 py-1">Home</a>
        <a href="#" className="text-gray-700 py-1">About</a>
        <a href="#" className="text-gray-700 py-1">Contact</a>

        {user ? (
          <>
            <div
              onClick={() => navigate("/profile")}
              className="text-gray-700 py-2 font-medium cursor-pointer"
            >
              {user.name}
            </div>
            <button
              onClick={handleLogout}
              className="text-red-500 text-sm underline"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="mt-2 px-5 py-2 bg-[#3585c2] hover:bg-[#2d6ca1] text-white rounded-full text-sm"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
