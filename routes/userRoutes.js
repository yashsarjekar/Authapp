const express = require('express');
const router = express.Router();
const userConstroller = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");


router.post('/signup', userConstroller.register_user);
router.post('/login', userConstroller.login_validation, userConstroller.login);
router.get('/auth', authMiddleware, userConstroller.userdata);


module.exports = router;