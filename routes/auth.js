const express = require("express");
const router = express.Router();

const { register, controller, login } = require("../controllers/auth.js");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
