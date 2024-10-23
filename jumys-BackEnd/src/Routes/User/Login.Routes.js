const express = require('express');
const userRoutes = express.Router();

const {userVerifyToken} = require('../../Helpers/UserVerifyToken');

const {
    registerUser,
    loginUser,
    getAllUser,
    getUser,
    updatePassword,
    updateUser,
    deleteUser

} = require('../../Controller/User/Login.controller');

userRoutes.post('/register-user',registerUser);

userRoutes.post('/login-user',loginUser);

userRoutes.get('/get-user',userVerifyToken,getUser);

userRoutes.get('/get-all-user',userVerifyToken,getAllUser);

userRoutes.put('/update-user',userVerifyToken,updateUser);

userRoutes.put('/update-password',userVerifyToken,updatePassword);

userRoutes.post('/delete-user',userVerifyToken,deleteUser);

module.exports = userRoutes;