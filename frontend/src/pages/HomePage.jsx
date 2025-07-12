// HomePage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import { users as allUsers } from "../assets/users";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("Availability");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;

  const status = selectedOption.toLowerCase() === "availability" ? "available" : "pending";

  // Filter by status and search
  const filteredUsers = allUsers.filter((user) => {
    const matchStatus = user.status === status;
    const matchSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.skillsOffered.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      user.skillsWanted.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchStatus && matchSearch;
  });

  // Pagination
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <SearchBar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="mt-8">
        {filteredUsers.length === 0 ? (
          <p className="text-center text-gray-500">No users found</p>
        ) : (
          <>
            {currentUsers.map((user) => (
              <UserCard key={user.id} user={user} onRequest={() => {}} />
            ))}

            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredUsers.length / usersPerPage)}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;