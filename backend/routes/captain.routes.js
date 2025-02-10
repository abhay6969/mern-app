const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register",[
    body("email").isEmail().withMessage("Invalid EMail"),
    body("fullname.firstname").isLength({min:3}).withMessage("Fullname must be at least 3 characters long"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity").isLength({min:1}).withMessage("Capacity must be at least 3 characters long"),
    body("vehicle.vehicleType").isLength({min:3}).withMessage("Vehicle Type must be at least 3 characters long"),
],captainController.registerCaptain);

router.post("/login",[
    body("email").isEmail().withMessage("Invalid EMail"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
],captainController.loginCaptain);
router.get("/profile",authMiddleware.authCaptain,captainController.getProfile);

router.get("/logout",authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports = router;