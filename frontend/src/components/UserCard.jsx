// src/components/UserCard.jsx

import React from "react";

const UserCard = ({ user, onRequest }) => {
  return (
    <div className="bg-white text-black border border-[#3585c2] p-6 rounded-2xl flex justify-between items-center shadow hover:shadow-lg transition duration-200">
      {/* Left Section: Profile Photo + Info */}
      <div className="flex items-center space-x-6">
        <div className="w-20 h-20 rounded-full border-2 border-[#3585c2] flex overflow-hidden">
          <img
            src="priyanshu.jpg" // Replace with dynamic photo URL if available
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          <div className="mb-1">
            <span className="font-semibold">Skill offered ➜</span>
            <span className="ml-2 space-x-2">
              {user.skillsOffered.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-orange-200 text-orange-900 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </span>
          </div>
          <div>
            <span className="font-semibold">Skill wanted ➜</span>
            <span className="ml-2 space-x-2">
              {user.skillsWanted.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-green-200 text-green-900 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end space-y-4">
        <button
          onClick={() => onRequest(user.id)}
          className="bg-[#3585c2] text-white px-5 py-2 rounded-md border border-[#3585c2] hover:bg-[#2c6fa3] shadow"
        >
          Request →
        </button>
        <span className="text-sm text-gray-700">Rating: {user.rating}/5</span>
      </div>
    </div>
  );
};

export default UserCard;
