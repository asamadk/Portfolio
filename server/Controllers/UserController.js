const express = require("express");

const UserService = require("../Service/UserService");
const auth = require("../Middleware/auth");

const router = express.Router();
 
router.post("/signup",UserService.signup);
router.post("/login", UserService.login);
router.get("/:userId", auth,UserService.getOneUser);

module.exports = router;
