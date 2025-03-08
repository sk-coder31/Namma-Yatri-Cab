const userModel = require('../models/user.model');
const userService  = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListingModel = require("../models/blackListToken.model.js");
const registerUser = async (req, res, next) => {
    try {
        // Validate request body
        

        const { fullname :{firstname, lastname}, email, password } = req.body;
        const isMatched = await userModel.findOne({ email});
        if(isMatched){
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const hashedPassword = await userModel.hashPassword(password);

        
        const user = await userService.createUser({
            firstname,
            lastname,
            email,
            password: hashedPassword, 
        });

        
        const token = user.generateAuthToken();

        
        res.status(201).json({ token: token });
    }
     catch (error) {
        res.status(400).json({ error: error.message });
    }
};
const loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const{email,password} = req.body;
    const user = await userModel.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({message:'Invalid email or password'});
    }
    const token = user.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token:token});
}
const getUserProfile = async (req, res) => {
    
    return res.status(200).json(req.user);
}

const logoutUser = async(req,res,next)=>{
    const token = req.cookies?.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    res.clearCookie('token');
    await blackListingModel.create({token});
    res.status(200).json({message:"Logged out successfully"});
}

module.exports = { registerUser ,loginUser,getUserProfile,logoutUser};
