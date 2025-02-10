const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const {body} = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register",[
    body("email").isEmail().withMessage("Invalid EMail"),
    body("fullname.firstname").isLength({min:3}).withMessage("Fullname must be at least 3 characters long"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
],userController.registerUser);

router.post("/login",[
    body("email").isEmail().withMessage("Invalid EMail"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
],userController.loginUser);

router.get("/profile",authMiddleware.authUser,userController.getProfile);

router.get("/logout",authMiddleware.authUser,userController.logoutUser);




module.exports = router;