const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller.js');
const {authMiddleware} = require('../middlewares/auth.middleware.js');
router.post(
    '/register',
    userController.registerUser
);

router.post(
    '/login',
    [body('email').isEmail().withMessage('Invalid email'),body('password').isLength({min:6}).withMessage('password length is wrong')]
    ,userController.loginUser
)
router.get('/profile',authMiddleware,userController.getUserProfile);

router.get('/logout',authMiddleware,userController.logoutUser);

module.exports = router;
