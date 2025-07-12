// src/components/UserCard.jsx

import React from "react";

const UserCard = ({ user, onRequest }) => {
  return (
    <div className="bg-white text-black border border-[#3585c2] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-full max-w-4xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      
      {/* Left: Profile & Info */}
      <div className="flex items-start space-x-6">
        {/* Profile Image */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#3585c2] overflow-hidden shadow-sm">
          <img
            src="ptemp.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-1">{user.name}</h2>

          <div className="mb-2">
            <p className="font-semibold text-sm">Skill offered ➜</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {user.skillsOffered.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs border border-orange-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm">Skill wanted ➜</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {user.skillsWanted.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs border border-green-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Action */}
      <div className="flex flex-col items-end space-y-2">
        <button
          onClick={() => onRequest(user.id)}
          className="bg-[#3585c2] hover:bg-[#2c6fa3] text-white px-5 py-2 rounded-md border border-[#3585c2] shadow transition"
        >
          Request →
        </button>
        <span className="text-sm text-gray-600">Rating: {user.rating}/5</span>
      </div>
    </div>
  );
};

export default UserCard;
