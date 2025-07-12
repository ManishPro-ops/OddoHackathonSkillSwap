const express = require("express");
const router  = express.Router();
const create_user = require("../controllers/create_user");
const { model } = require("mongoose");

router.post("/create_user",create_user);

module.exports = router;