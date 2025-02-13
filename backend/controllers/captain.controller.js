const blacklistToken = require("../models/blacklistToken");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.services");
const {validationResult} = require("express-validator");


module.exports.registerCaptain = async (req, res, next) => {
    // console.log("hi")
    // console.log(req.body)
    const errors = validationResult(req);
    // console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {fullname,email,password,vehicle} = req.body;

    const isCaptainAlreadyExists = await captainModel.findOne({ email });

    if (isCaptainAlreadyExists) {
        return res.status(400).json({ message: 'Captain already exist' });
    }


    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,color:vehicle.color,plate:vehicle.plate,capacity:vehicle.capacity,vehicleType:vehicle.vehicleType});

        const token=captain.generateAuthToken();

        res.status(201).json({token,captain});

}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
        res.status(401).json({ message: "Captain not Found" });
    }
    const isValid = await captain.comparePassword(password);
    if (!isValid) {
        res.status(401).json({ message: "Invalid Credentials" });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, captain });
}

module.exports.getProfile = async (req,res,next)=>{
    return res.status(200).json({captain:req.captain});
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistToken.create({ token });
    res.clearCookie("token");
    res.status(200).json({ message: "Logged Out" });
}