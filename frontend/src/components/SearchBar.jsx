import React, { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState("Availability");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex items-center justify-end mt-24 mb-8 mr-10 gap-4"
      ref={dropdownRef}
    >
      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-[#3585c2] text-white px-4 py-2 rounded-md flex items-center space-x-2 border border-[#3585c2] hover:bg-[#2c6fa3]"
        >
          <span>{selectedOption}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute mt-2 w-36 bg-white text-black rounded-md shadow-lg z-10">
            <button
              onClick={() => handleOptionClick("Availability")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Availability
            </button>
            <button
              onClick={() => handleOptionClick("Pending")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Pending
            </button>
          </div>
        )}
      </div>

      {/* Search Input */}
      <div className="flex border border-gray-500 rounded-md overflow-hidden bg-white">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 text-black placeholder-gray-500 outline-none"
        />
        <button className="bg-[#3585c2] text-white px-4 py-2 hover:bg-[#2c6fa3]">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
