import React, { useState } from "react";

const skillOptions = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Data Science",
  "Machine Learning",
  "Photography",
  "Video Editing",
  "Graphic Design",
  "Drawing",
  "Painting",
  "Singing",
  "Piano",
  "Guitar",
  "Dancing",
  "Yoga",
  "Public Speaking",
  "Creative Writing",
  "Cooking",
  "Football",
  "Basketball",
  "Cricket",
  "Fitness Training",
  "Foreign Languages",
];

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
    dp: null,
    skillsOffered: [],
    skillsWanted: [],
  });

  const [showOfferDropdown, setShowOfferDropdown] = useState(false);
  const [showWantDropdown, setShowWantDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "dp") {
      setFormData({ ...formData, dp: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const toggleSkill = (type, skill) => {
    setFormData((prev) => {
      const list = type === "offer" ? prev.skillsOffered : prev.skillsWanted;
      const updated = list.includes(skill)
        ? list.filter((s) => s !== skill)
        : [...list, skill];

      return {
        ...prev,
        [type === "offer" ? "skillsOffered" : "skillsWanted"]: updated,
      };
    });
  };

  const removeSkill = (type, skill) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].filter((s) => s !== skill),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const {
      name,
      username,
      email,
      location,
      password,
      confirmPassword,
    } = formData;

    if (
      !name ||
      !username ||
      !email ||
      !location ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
    // Submit using Axios or fetch if needed
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-8 tracking-wide">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Username"
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Location"
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Create Password"
            className="w-full border px-4 py-2 rounded-lg"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm Password"
            className="w-full border px-4 py-2 rounded-lg"
          />

          {/* DP is optional */}
          <input
            type="file"
            name="dp"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />

          {/* Skills Offered */}
          <div className="relative">
            <label className="block font-medium text-gray-700 mb-1">
              Skills You Offer
            </label>
            <div
              onClick={() => setShowOfferDropdown(!showOfferDropdown)}
              className="w-full border rounded-lg px-4 py-2 cursor-pointer bg-white"
            >
              Click to select skills
            </div>

            {showOfferDropdown && (
              <div className="absolute z-10 w-full bg-white border mt-1 rounded-lg shadow">
                <div className="max-h-52 overflow-y-auto">
                  {skillOptions.map((skill) => (
                    <label
                      key={skill}
                      className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.skillsOffered.includes(skill)}
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
                    className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 text-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            <div className="mt-2 flex flex-wrap gap-2">
              {formData.skillsOffered.map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill("skillsOffered", skill)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Skills Wanted */}
          <div className="relative">
            <label className="block font-medium text-gray-700 mb-1">
              Skills You Want to Learn
            </label>
            <div
              onClick={() => setShowWantDropdown(!showWantDropdown)}
              className="w-full border rounded-lg px-4 py-2 cursor-pointer bg-white"
            >
              Click to select skills
            </div>

            {showWantDropdown && (
              <div className="absolute z-10 w-full bg-white border mt-1 rounded-lg shadow">
                <div className="max-h-52 overflow-y-auto">
                  {skillOptions.map((skill) => (
                    <label
                      key={skill}
                      className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.skillsWanted.includes(skill)}
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
                    className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 text-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            <div className="mt-2 flex flex-wrap gap-2">
              {formData.skillsWanted.map((skill) => (
                <span
                  key={skill}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill("skillsWanted", skill)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
