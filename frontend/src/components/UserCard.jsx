import React from "react";

const UserCard = ({ user, onRequest }) => {
  return (
    <div className="bg-blue-400 text-white border border-gray-600 p-6 rounded-2xl flex justify-between items-center mb-6 max-w-4xl mx-auto mt-10">
      {/* Left Section: Profile Photo + Info */}
      <div className="flex items-center space-x-6">
        {/* Profile Photo */}
        <div className="w-20 h-20 rounded-full border-2 border-white flex overflow-hidden">
          <img
            src="priyanshu.jpg" // Replace with dynamic photo URL if available
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Details */}
        <div>
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>

          {/* Skills Offered */}
          <div className="mb-1">
            <span className="text-white">Skill offered ➜</span>
            <span className="ml-2 space-x-2">
              {user.skillsOffered.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-orange-500 border border-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </span>
          </div>

          {/* Skills Wanted */}
          <div>
            <span className="text-white">Skill wanted ➜</span>
            <span className="ml-2 space-x-2">
              {user.skillsWanted.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-orange-500 border border-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* Right Section: Request + Rating */}
      <div className="flex flex-col items-end space-y-4">
        <button
          onClick={() => onRequest(user.id)}
          className="bg-cyan-700 text-white px-5 py-2 rounded-md border cursor-pointer border-white hover:bg-cyan-800 shadow"
        >
          Request →
        </button>
        <span className="text-sm text-white">rating: {user.rating}/5</span>
      </div>
    </div>
  );
};

export default UserCard;
