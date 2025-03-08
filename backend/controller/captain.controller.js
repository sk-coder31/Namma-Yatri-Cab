const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blackListingModel = require("../models/blackListToken.model.js");

const registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
    }

   
    const isMatched = await captainModel.findOne({ email: req.body.email });
    if (isMatched) {
        return res.status(400).json({ message: 'Captain already exists' });
    }

    const { fullname, email, password, vehicle } = req.body;
    const hashedPassword = await captainModel.hashPassword(password);

    try {
        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            model: vehicle.model,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });

       
        const token = captain.generateAuthToken(); 

        return res.status(201).json({ token, captain }); 

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const loginCaptain = async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
    }
    const {email,password} = req.body;
    try{
        const captain = await captainModel.findOne({email}).select('+password');
        if(!captain){
            return res.status(404).json({message:"Captain not found"});
        }
        const isMatched = await captain.comparePassword(password);
        if(!isMatched){
            return res.status(400).json({message:"Invalid password"});
        }
        const token = captain.generateAuthToken();
        res.cookie('token',token,{httpOnly:true});
        return res.status(200).json({token,captain});
    }catch(error){
        console.log(error);
        return res.status(500).json({error:error.message});
    }
}
    
const getProfile = async(req,res,next)=>{
    return res.status(200).json({captain:req.captain});
}

const logoutCaptain = async(req,res,next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    await blackListingModel.create({
        token
    });
    return res.status(200).json({message:"Logged out successfully"});
}
module.exports = { registerCaptain ,loginCaptain,getProfile,logoutCaptain};
