// src/components/Pagination.jsx

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border border-gray-400 text-gray-600 disabled:opacity-50 rounded-full"
      >
        &lt;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-full border text-sm transition-all duration-200 ${
            page === currentPage
              ? "bg-[#3585c2] text-white border-[#3585c2]"
              : "bg-white text-gray-700 border-gray-400 hover:bg-[#3585c2] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border border-gray-400 text-gray-600 disabled:opacity-50 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;