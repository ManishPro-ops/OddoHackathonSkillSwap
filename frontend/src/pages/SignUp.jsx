import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const skillOptions = [
  "Web Development", "App Development", "UI/UX Design", "Data Science", "Machine Learning",
  "Photography", "Video Editing", "Graphic Design", "Drawing", "Painting",
  "Singing", "Piano", "Guitar", "Dancing", "Yoga",
  "Public Speaking", "Creative Writing", "Cooking", "Football", "Basketball",
  "Cricket", "Fitness Training", "Foreign Languages"
];

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    skill_offered: [],
    skill_request: [],
    dp: null
  });

  const [showOfferDropdown, setShowOfferDropdown] = useState(false);
  const [showWantDropdown, setShowWantDropdown] = useState(false);
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "dp") {
      setFormData({ ...formData, dp: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleSkill = (type, skill) => {
    const key = type === "offer" ? "skill_offered" : "skill_request";
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].includes(skill)
        ? prev[key].filter((s) => s !== skill)
        : [...prev[key], skill],
    }));
  };

  const removeSkill = (key, skill) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].filter((s) => s !== skill),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name, email, password, confirmPassword, location,
      skill_offered, skill_request, dp
    } = formData;

    if (!name || !email || !password || !confirmPassword || !location) {
      setError("Please fill all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const payload = {
        name,
        email,
        password,
        location,
        skill_offered,
        skill_request,
        dp: dp ? dp.name : null
      };

      await axios.post("http://localhost:3000/odoo/create_user", payload);
      alert("Signup successful!");
      navigate("/")
    } catch (err) {
      console.error(err);
      console.log(err);
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center" style={{ color: "#3585c2" }}>
          Sign Up to Your Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md text-center mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-700">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
            required
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
            required
          />
          <input
            name="dp"
            type="file"
            onChange={handleChange}
            className="w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#3585c2]/10 file:text-[#3585c2] hover:file:bg-[#3585c2]/20"
          />

          {/* Skills Offered */}
          <div className="relative">
            <label className="font-medium text-gray-600">Skills You Offer</label>
            <div
              onClick={() => setShowOfferDropdown(!showOfferDropdown)}
              className="border border-gray-300 rounded-md px-4 py-2 bg-white cursor-pointer mt-1"
            >
              {formData.skill_offered.length > 0
                ? `${formData.skill_offered.length} selected`
                : "Select skills"}
            </div>

            {showOfferDropdown && (
              <div className="absolute w-full z-10 bg-white border rounded-md shadow-md mt-2">
                <div className="max-h-52 overflow-y-auto p-2">
                  {skillOptions.map((skill) => (
                    <label key={skill} className="block text-sm p-1">
                      <input
                        type="checkbox"
                        checked={formData.skill_offered.includes(skill)}
                        onChange={() => toggleSkill("offer", skill)}
                        className="mr-2"
                      />
                      {skill}
                    </label>
                  ))}
                </div>
                <div className="sticky bottom-0 bg-white border-t p-2 text-right shadow-inner">
                  <button
                    type="button"
                    onClick={() => setShowOfferDropdown(false)}
                    className="px-4 py-1 text-sm rounded-md text-white"
                    style={{ backgroundColor: "#3585c2" }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap mt-2 gap-2">
              {formData.skill_offered.map((skill) => (
                <span key={skill} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                  {skill}
                  <button
                    onClick={() => removeSkill("skill_offered", skill)}
                    className="ml-1 text-red-500 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Skills Wanted */}
          <div className="relative">
            <label className="font-medium text-gray-600">Skills You Want to Learn</label>
            <div
              onClick={() => setShowWantDropdown(!showWantDropdown)}
              className="border border-gray-300 rounded-md px-4 py-2 bg-white cursor-pointer mt-1"
            >
              {formData.skill_request.length > 0
                ? `${formData.skill_request.length} selected`
                : "Select skills"}
            </div>

            {showWantDropdown && (
              <div className="absolute w-full z-10 bg-white border rounded-md shadow-md mt-2">
                <div className="max-h-52 overflow-y-auto p-2">
                  {skillOptions.map((skill) => (
                    <label key={skill} className="block text-sm p-1">
                      <input
                        type="checkbox"
                        checked={formData.skill_request.includes(skill)}
                        onChange={() => toggleSkill("want", skill)}
                        className="mr-2"
                      />
                      {skill}
                    </label>
                  ))}
                </div>
                <div className="sticky bottom-0 bg-white border-t p-2 text-right shadow-inner">
                  <button
                    type="button"
                    onClick={() => setShowWantDropdown(false)}
                    className="px-4 py-1 text-sm rounded-md text-white"
                    style={{ backgroundColor: "#3585c2" }}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap mt-2 gap-2">
              {formData.skill_request.map((skill) => (
                <span key={skill} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  {skill}
                  <button
                    onClick={() => removeSkill("skill_request", skill)}
                    className="ml-1 text-red-500 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white py-2 rounded-md font-medium transition mt-2"
            style={{ backgroundColor: "#3585c2" }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
