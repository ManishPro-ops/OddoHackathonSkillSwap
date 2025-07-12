import React, { useState, useRef, useEffect } from "react";

const SearchBar = ({ selectedOption, setSelectedOption, searchTerm, setSearchTerm }) => {
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
      ref={dropdownRef}
      className="mt-24 mb-10 flex flex-col md:flex-row justify-between items-center gap-4 px-4 py-4 bg-white rounded-xl shadow-md border border-gray-200 max-w-5xl mx-auto"
    >
      {/* Dropdown Filter */}
      <div className="relative w-full md:w-auto">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full md:w-auto bg-[#3585c2] text-white px-5 py-2 rounded-lg shadow-md flex justify-between items-center"
        >
          <span className="font-medium">{selectedOption}</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Items */}
        {isDropdownOpen && (
          <div className="absolute mt-2 w-full md:w-44 bg-white border rounded-md shadow-lg z-20">
            {["Availability", "Pending", "Requested"].map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Search Field */}
      <div className="flex items-center w-full md:max-w-md rounded-lg overflow-hidden border border-gray-300 shadow-sm">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or skill..."
          className="flex-grow px-4 py-2 focus:outline-none text-gray-800"
        />
        <button className="bg-[#3585c2] hover:bg-[#2f6ea7] text-white px-5 py-2 font-medium transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
