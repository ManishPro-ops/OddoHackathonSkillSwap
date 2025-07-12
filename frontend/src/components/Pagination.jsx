import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-8 p-10">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border border-black text-black disabled:opacity-50 rounded-full"
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-full border transition-all duration-200 ${
            page === currentPage
              ? "bg-black text-white border-black"
              : "bg-white text-black border-black hover:bg-black hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border border-black text-black disabled:opacity-50 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
