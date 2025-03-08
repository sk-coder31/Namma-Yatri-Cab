const userModel = require('../models/user.model');

module.exports.createUser=async({firstname,lastname,email,password})=>{
    if(!firstname || !lastname || !email || !password){
        throw new Error('All fields required');
    }
    const user = userModel.create({
        fullname:{
            firstname:firstname,
            lastname:lastname
        },
        email,
        password,
    });
    return user;
}