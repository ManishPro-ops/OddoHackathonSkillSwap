import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const allSkills = [
    "Graphic Design", "Video Editing", "Photoshop", "Python", "JavaScript",
    "Management", "Public Speaking", "UI/UX", "React"
];

const ProfileEdit = () => {
    const navigate = useNavigate();
    const [modalType, setModalType] = useState(null); // 'offered' or 'wanted'

    const [profile, setProfile] = useState({
        name: "Marc Demo",
        location: "India",
        profilePic: "profile.jpg",
        skillsOffered: ["Graphic Design", "Video Editing"],
        skillsWanted: ["Python", "JavaScript"],
        availability: "Weekends",
        visibility: "Public"
    });

    const handleSave = () => {
        alert("Changes saved!");
        navigate('/');
    };

    const openModal = (type) => setModalType(type);
    const closeModal = () => setModalType(null);

    const toggleSkill = (type, skill) => {
        const key = type === 'offered' ? 'skillsOffered' : 'skillsWanted';
        setProfile((prev) => ({
            ...prev,
            [key]: prev[key].includes(skill)
                ? prev[key].filter((s) => s !== skill)
                : [...prev[key], skill]
        }));
    };

    return (
        <div className="min-h-screen bg-blue-100 text-gray-900 p-6 relative">
            <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side */}
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold text-[#3585c0]">Name</label>
                        <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="w-full mt-1 p-2 border rounded bg-gray-100 text-black"
                        />

                    </div>

                    <div>
                        <label className="font-semibold text-[#3585c0]">Location</label>
                        <input
                            type="text"
                            value={profile.location}
                            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                            className="w-full mt-1 p-2 border rounded bg-gray-100 text-black"
                        />

                    </div>

                    {/* Skills Offered */}
                    <div>
                        <label className="font-semibold text-[#3585c0]">Skills Offered</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {profile.skillsOffered.map((skill, i) => (
                                <span key={i} className="bg-[#3585c0] text-white px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                            <button
                                onClick={() => openModal('offered')}
                                className="bg-white border border-[#3585c0] text-[#3585c0] px-3 py-1 rounded-full text-sm"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Skills Wanted */}
                    <div>
                        <label className="font-semibold text-[#3585c0]">Skills Wanted</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {profile.skillsWanted.map((skill, i) => (
                                <span key={i} className="bg-blue-100 text-[#3585c0] px-3 py-1 rounded-full text-sm border border-[#3585c0]">
                                    {skill}
                                </span>
                            ))}
                            <button
                                onClick={() => openModal('wanted')}
                                className="bg-white border border-[#3585c0] text-[#3585c0] px-3 py-1 rounded-full text-sm"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="font-semibold text-[#3585c0]">Availability</label>
                        <input
                            type="text"
                            value={profile.availability}
                            onChange={(e) => setProfile({ ...profile, availability: e.target.value })}
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

                {/* Right Side */}
                <div className="flex items-center justify-center h-full">
                    <div className="w-full h-full bg-[#3585c0] rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                        <div className="w-60 h-60 border-4 border-white rounded-full overflow-hidden mb-6">
                            <img
                                src="ggl_logo.png"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex gap-4">
                            <button className="w-20 h-10 border border-white text-white rounded-md hover:bg-white hover:text-[#3585c0] transition">
                                Edit
                            </button>
                            <button className="w-20 h-10 border border-white text-white rounded-md hover:bg-white hover:text-red-600 transition">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save & Discard Buttons */}
            <div className="flex justify-end gap-4 mt-8">
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 rounded bg-white border border-[#3585c0] text-[#3585c0] hover:bg-blue-50 transition"
                >
                    Discard
                </button>
                <button
                    onClick={handleSave}
                    className="px-6 py-2 rounded bg-[#3585c0] text-white hover:bg-[#2f76ac] transition"
                >
                    Save
                </button>
            </div>

            {/* Modal Popup */}
            {modalType && (
                <div className="fixed inset-0 backdrop-blur-sm bg-white/20 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-[#3585c0] w-80">
                        <h3 className="text-lg font-semibold text-[#3585c0] mb-4 text-center">
                            Select {modalType === 'offered' ? "Offered Skill" : "Wanted Skill"}
                        </h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {allSkills.map((skill) => (
                                <button
                                    key={skill}
                                    onClick={() => toggleSkill(modalType, skill)}
                                    className="bg-[#3585c0] text-white px-3 py-1 rounded-full text-sm hover:bg-[#2f76ac]"
                                >
                                    {skill}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 text-center">
                            <button
                                onClick={closeModal}
                                className="mt-4 px-4 py-1 bg-[#3585c0] text-white rounded hover:bg-[#2f76ac]"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileEdit;
