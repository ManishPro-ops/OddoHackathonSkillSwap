const User = require("../models/user"); // adjust path if needed

async function getAllUsers(req, res) {
  try {
    const usersFromDB = await User.find();

    const transformedUsers = usersFromDB.map((user, index) => {
      return {
        id: (index + 1).toString(),
        name: user.name || "Unnamed",
        skillsOffered: extractSkills(user.skill_offered || user.skillsOffered),
        skillsWanted: extractSkills(user.skill_request || user.skillsWanted),
        rating: generateRandomRating(),
        image: getRandomImage(),
        status: "available", // you can add logic to vary this
      };
    });

    res.status(200).json({
      success: true,
      users: transformedUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

// Helper functions
function extractSkills(skillsArray) {
  if (!Array.isArray(skillsArray)) return [];
  return skillsArray.map((s) => (typeof s === "string" ? s : s.skill_name || ""));
}

function generateRandomRating() {
  return parseFloat((Math.random() * 2 + 3).toFixed(1)); // between 3.0 to 5.0
}

function getRandomImage() {
  const images = ["/marc.jpg", "/michell.jpg", "/joe.jpg", "/priya.jpg", "/rahul.jpg"];
  return images[Math.floor(Math.random() * images.length)];
}

module.exports = getAllUsers;
