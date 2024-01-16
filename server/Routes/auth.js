const express = require('express');
const { register, login, profile } = require('../Controllers/auth');
const { authenticate } = require('../Middleware/auth');
const router = express.Router()


router.post("/register", register);
router.post("/login", login );
router.get("/profile", authenticate, profile);

module.exports = router