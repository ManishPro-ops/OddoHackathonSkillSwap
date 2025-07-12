const express = require("express");
const router  = express.Router();
const {create_user} = require(".")

router.post("create_user",create_user);