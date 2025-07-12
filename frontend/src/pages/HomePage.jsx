// src/pages/HomePage.jsx

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import { users as allUsers } from "../assets/users";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = allUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  const handleRequest = (userId) => {
    const isLoggedIn = true; // Replace with real auth check
    if (!isLoggedIn) {
      alert("Please log in to send a request.");
      return;
    }
    alert(`Request sent to user ID: ${userId}`);
  };

  return (
    <>
      <Navbar />
      <SearchBar />

      {currentUsers.map((user) => (
        <UserCard key={user.id} user={user} onRequest={handleRequest} />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default HomePage;
