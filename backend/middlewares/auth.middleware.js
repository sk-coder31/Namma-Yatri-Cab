const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const blackListingModel = require("../models/blackListToken.model.js");
const captainModel = require('../models/captain.model');
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies?.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const contains = await blackListingModel.findOne({token});
        if(contains){
            return res.status(401).json({message:"Unauthorized"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        const user = await userModel.findById(decoded._id);
        console.log(user);
        req.user = user;
        next(); 
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

const captainAuth = async (req, res, next) => {
    try {
        const token = req.cookies?.token || (req.headers.authorization && req.headers.authorization.split(" ")[1]);
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const contains = await blackListingModel.findOne({token});
        if(contains){
            return res.status(401).json({message:"Unauthorized"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = {authMiddleware,captainAuth};
