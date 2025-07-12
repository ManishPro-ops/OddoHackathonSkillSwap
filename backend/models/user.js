const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  skillsOffered: {
    type: [String], // array of skill names
    default: []
  },

  skill_request: {
    type: [String], // array of skill names
    default: []
  },

  dp: {
    type: String // optional: URL or filename of profile picture
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
