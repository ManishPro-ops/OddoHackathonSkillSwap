import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  // ✅ Detect scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative">
        <a href="#">
          <h1 className="text-3xl font-bold">SkillSwap</h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <button  className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
            Login
          </button>
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
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Contact
          </a>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
