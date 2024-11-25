const express = require('express');
const adminRoutes = express.Router();

const {adminVerifyToken} = require('../../Helpers/AdminVerifyToken');

const {
    registerAdmin,
    loginAdmin,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    logOut,
    updatePassword

} = require('../../Controller/Admin/Login.controller');

adminRoutes.post('/register-admin',registerAdmin);

adminRoutes.post('/login-admin',loginAdmin);

adminRoutes.get('/get-admin',adminVerifyToken,getUser);

adminRoutes.get('/get-all-admin',adminVerifyToken,getAllUsers);

adminRoutes.put('/update-admin',adminVerifyToken,updateUser);

adminRoutes.delete('/delete-admin',adminVerifyToken,deleteUser);

adminRoutes.post('/logout-admin', adminVerifyToken, logOut);

adminRoutes.put('/update-password', adminVerifyToken, updatePassword);

module.exports = adminRoutes;