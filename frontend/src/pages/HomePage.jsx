import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("Availability");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const usersPerPage = 2;
  const status = selectedOption.toLowerCase() === "availability" ? "available" : "pending";

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/odoo/getall");
        const data = await response.json();

        if (data.success) {
          const formattedUsers = data.users.map((user, index) => ({
            id: user.id || (index + 1).toString(),
            name: user.name || "No Name",
            skillsOffered: user.skillsOffered || [],
            skillsWanted: user.skillsWanted || [],
            rating: 0, // override with default 0
            image: "./ptemp.jpg", // override with default image
            status: user.status || "available",
          }));

          setAllUsers(formattedUsers);
        } else {
          throw new Error(data.message || "Failed to load users");
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Could not fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredUsers.length === 0 ? (
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
