import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ProfilePage = () => {
  const navigate = useNavigate();

  const profile = {
    name: "Marc Demo",
    location: "India",
    profilePic: "ggl_logo.png",
    skillsOffered: ["Graphic Design", "Video Editing", "Photoshop", "Editing", "React Js", "Shooting"],
    skillsWanted: ["Python", "JavaScript", "Manager"],
    availability: "Weekends",
    visibility: "Public",
    feedback: "Reliable and skilled individual!",
    rating: 5
  };

  const requestStats = [
    { name: 'Jan', Sent: 4, Received: 2 },
    { name: 'Feb', Sent: 6, Received: 5 },
    { name: 'Mar', Sent: 8, Received: 6 },
    { name: 'Apr', Sent: 5, Received: 7 },
    { name: 'May', Sent: 9, Received: 4 },
  ];

  return (
    <div className="min-h-screen bg-blue-100 p-6 flex flex-col md:flex-row gap-6 text-gray-800">

      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 bg-[#3585c0] rounded-xl p-6 text-center shadow-lg text-white">
        <img
          src="ggl_logo.png"
          alt="Profile"
          className="w-50 h-50 rounded-full mx-auto my-auto border-4 border-white mb-4"
        />
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => navigate('/edit')}
            className="border px-4 py-1 rounded hover:bg-white hover:text-[#3585c0] transition"
          >
            Edit
          </button>
          <button className="border px-4 py-1 rounded hover:bg-white hover:text-[#3585c0] transition">
            Remove
          </button>
        </div>
        <h2 className="text-xl font-semibold">{profile.name}</h2>
        <p className="text-sm text-[#3585c0] mb-6">{profile.location}</p>

        {/* Skills Offered */}
        <div className="bg-white text-[#3585c0] rounded-lg p-4 mt-6 text-left shadow">
          <h3 className="text-2xl font-semibold mb-2 border-b border-[#3585c0] pb-1">Skills Offered</h3>
          <ul className="space-y-1 list-disc list-inside">
            {profile.skillsOffered.map((skill, i) => (
              <li key={i} className="text-[20px]">{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">

        {/* Availability and Rating Boxes */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Availability Box */}
          <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-[#3585c0] font-semibold text-lg mb-2">Availability</h3>
            <p className="text-xl font-medium">{profile.availability}</p>
          </div>

          {/* Rating Box */}
          <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <h3 className="text-[#3585c0] font-semibold text-lg mb-2">Rating & Reviews</h3>
            <p className="text-xl font-medium mb-1">{profile.rating}.0</p>
            <div className="text-yellow-400 text-xl">
              {"★".repeat(profile.rating) + "☆".repeat(5 - profile.rating)}
            </div>
          </div>
        </div>

        {/* Skills Wanted */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h3 className="text-[#3585c0] font-semibold text-lg mb-4">Skills Wanted</h3>
          <div className="flex flex-wrap gap-3">
            {profile.skillsWanted.map((skill, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-blue-100 border border-blue-300 text-[#3585c0] rounded-full text-sm shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Request Statistics */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
          <h3 className="text-[#3585c0] font-semibold text-lg mb-4">Request Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={requestStats} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Sent" fill="#3585c0" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Received" fill="#82ca9d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
