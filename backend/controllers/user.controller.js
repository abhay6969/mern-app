const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const blacklistToken = require("../models/blacklistToken");


module.exports.registerUser = async(req,res,next)=>{
    // console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
    }
    const {fullname,email,password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        return res.status(400).json({ message: 'User already exist' });
    }

    firstname = fullname.firstname;
    lastname = fullname.lastname;  
    
    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashPassword(password);
    
    const user = await userService.createUser({firstname,lastname,email,password:hashedPassword});

    const token = user.generateAuthToken();
    res.status(201).json({token,user});
}

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // ✅ Stops execution
        }

        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({ message: "User not Found" }); // ✅ Stops execution
        }

        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid Credentials" }); // ✅ Stops execution
        }

        const token = user.generateAuthToken();
        res.cookie("token", token, { httpOnly: true });
        
        return res.status(200).json({ token, user }); // ✅ Final response

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: "Internal Server Error" }); // ✅ Ensure only one response
    }
};


module.exports.getProfile = async(req,res,next)=>{
    return res.status(200).json(req.user);
}
module.exports.logoutUser = async(req,res,next)=>{
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blacklistToken.create({token});

    res.status(200).json({message:"Logged Out"});
}
