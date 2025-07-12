import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Make sure this path is correct
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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 bg-white">
        <a href="#">
          <h1 className="text-3xl font-bold text-[#3585c2]">SkillSwap</h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 font-medium text-gray-700">
          <a href="#" className="hover:text-[#3585c2] transition">Home</a>
          <a href="#" className="hover:text-[#3585c2] transition">About</a>
          <a href="#" className="hover:text-[#3585c2] transition">Contact</a>

          {user ? (
            <div className="relative group">
              <FaUserCircle className="text-2xl text-[#3585c2] cursor-pointer" onClick={() => navigate("/profile")} />
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 p-3 hidden group-hover:block z-50">
                <p className="text-sm text-gray-700">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
                <button
                  onClick={logout}
                  className="text-red-500 text-xs mt-2 underline"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="cursor-pointer px-6 py-2 bg-[#3585c2] hover:bg-[#2d6ca1] transition text-white rounded-full">
              Login
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#3585c2" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#3585c2" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#3585c2" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <a href="#" className="block w-full py-1 text-gray-700 hover:text-[#3585c2]">Home</a>
          <a href="#" className="block w-full py-1 text-gray-700 hover:text-[#3585c2]">About</a>
          <a href="#" className="block w-full py-1 text-gray-700 hover:text-[#3585c2]">Contact</a>

          {user ? (
            <div className="block w-full py-1 text-gray-700">
              <p className="text-sm">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
              <button onClick={logout} className="text-red-500 text-xs mt-1 underline">
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="cursor-pointer px-6 py-2 mt-2 bg-[#3585c2] hover:bg-[#2d6ca1] transition text-white rounded-full text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
