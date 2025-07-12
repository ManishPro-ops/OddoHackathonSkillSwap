import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        name: "Marc Demo",
        location: "India",
        profilePic: "profile.jpg",
        skillsOffered: ["Graphic Design", "Video Editing", "Photoshop"],
        skillsWanted: ["Python", "JavaScript", "Manager"],
        availability: "Weekends",
        visibility: "Public"
    });

    const handleSave = () => {
        // Simulate save
        alert("Changes saved!");
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                    <a href="/swap-request" className="text-[#3585c0] underline">Swap request</a>
                    <a href="/" className="text-[#3585c0] underline">Home</a>
                    <img src={profile.profilePic} alt="User" className="w-10 h-10 rounded-full border-2 border-[#3585c0]" />
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left */}
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold text-[#3585c0]">Name</label>
                        <input
                            type="text"
                            value={profile.name}
                            className="w-full mt-1 p-2 border rounded bg-gray-100 text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold text-[#3585c0]">Location</label>
                        <input
                            type="text"
                            value={profile.location}
                            className="w-full mt-1 p-2 border rounded bg-gray-100 text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold text-[#3585c0]">Skills Offered</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {profile.skillsOffered.map((skill, i) => (
                                <span key={i} className="bg-[#3585c0] text-white px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold text-[#3585c0]">Availability</label>
                        <input
                            type="text"
                            value={profile.availability}
                            className="w-full mt-1 p-2 border rounded bg-gray-100 text-black"
                        />
                    </div>

                    <div>
                        <label className="font-semibold text-[#3585c0]">Profile</label>
                        <select className="w-full mt-1 p-2 border rounded bg-gray-100 text-black">
                            <option>Public</option>
                            <option>Private</option>
                        </select>
                    </div>
                </div>

                {/* Right */}
                <div className="space-y-4">
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 border-4 border-[#3585c0] rounded-full overflow-hidden">
                            <img src={profile.profilePic} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <button className="text-sm text-[#3585c0] mt-2 underline">Add/Edit</button>
                        <button className="text-sm text-red-500 mt-1 underline">Remove</button>
                    </div>

                    <div>
                        <label className="font-semibold text-[#3585c0]">Skills Wanted</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {profile.skillsWanted.map((skill, i) => (
                                <span key={i} className="bg-blue-100 text-[#3585c0] px-3 py-1 rounded-full text-sm border border-[#3585c0]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 rounded bg-white border border-[#3585c0] text-[#3585c0] hover:bg-blue-50 transition">
                    Discard
                </button>
                <button
                    onClick={handleSave}
                    className="px-6 py-2 rounded bg-[#3585c0] text-white hover:bg-[#2f76ac] transition">
                    Save
                </button>
            </div>

        </div>
    );
};

export default ProfileEdit;
