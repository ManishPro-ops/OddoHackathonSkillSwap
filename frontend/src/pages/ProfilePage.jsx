import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const profile = {
    name: "Marc Demo",
    location: "India",
    profilePic: "profile.jpg", // Place this image in your public or assets folder
    skillsOffered: ["Graphic Design", "Video Editing", "Photoshop"],
    skillsWanted: ["Python", "JavaScript", "Manager"],
    availability: "Weekends",
    visibility: "Public",
    feedback: "Reliable and skilled individual!"
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col md:flex-row p-6 gap-6">
      {/* Sidebar */}
      <div className="md:w-1/3 bg-white rounded-xl p-6 shadow-md">
        <div className="flex flex-col items-center">
          <img
            src="ggl_logo.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-[#3585c0]"
          />
          <h2 className="mt-4 text-xl font-bold text-[#3585c0]">{profile.name}</h2>
          <p className="text-gray-600">{profile.location}</p>
          <button
            onClick={() => navigate('/edit')}
            className="mt-4 px-4 py-2 text-sm rounded bg-[#3585c0] hover:bg-[#2f76ac] text-white"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="md:w-2/3 bg-white rounded-xl p-6 space-y-6 shadow-md">
        <div>
          <h3 className="font-semibold text-[#3585c0] mb-2">Skills Offered</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skillsOffered.map((skill, i) => (
              <span key={i} className="bg-[#3585c0] text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#3585c0] mb-2">Skills Wanted</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skillsWanted.map((skill, i) => (
              <span key={i} className="bg-blue-100 text-[#3585c0] px-3 py-1 rounded-full text-sm border border-[#3585c0]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-600">Availability</p>
            <p className="font-medium">{profile.availability}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Profile</p>
            <p className="font-medium">{profile.visibility}</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#3585c0] mb-2">Rating and Feedback</h3>
          <p className="text-gray-700">{profile.feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
