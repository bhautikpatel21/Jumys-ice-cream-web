const express = require('express');
const adminRoutes = express.Router();

const {adminVerifyToken} = require('../../Helpers/AdminVerifyToken');

const {
    registerAdmin,
    loginAdmin,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser

} = require('../../Controller/Admin/Login.controller');

adminRoutes.post('/register-admin',registerAdmin);

adminRoutes.post('/login-admin',loginAdmin);

adminRoutes.get('/get-admin',adminVerifyToken,getUser);

adminRoutes.get('/get-all-admin',adminVerifyToken,getAllUsers);

adminRoutes.put('/update-admin',adminVerifyToken,updateUser);

adminRoutes.post('/delete-admin',adminVerifyToken ,deleteUser);

module.exports = adminRoutes;