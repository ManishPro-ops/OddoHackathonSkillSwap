const express = require("express");
const router  = express.Router();
const create_user = require("../controllers/create_user");
const { model } = require("mongoose");
const login_user = require("../controllers/login_user");

router.post("/create_user",create_user);

router.post("/login",login_user);

module.exports = router;