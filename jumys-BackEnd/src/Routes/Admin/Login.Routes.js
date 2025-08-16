const express = require('express');
const adminRoutes = express.Router();

// const {adminVerifyToken} = require('../../Helpers/AdminVerifyToken');

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

adminRoutes.get('/get-admin',getUser);

adminRoutes.get('/get-all-admin',getAllUsers);

adminRoutes.put('/update-admin',updateUser);

adminRoutes.delete('/delete-admin',deleteUser);

adminRoutes.post('/logout-admin', logOut);

adminRoutes.put('/update-password', updatePassword);

module.exports = adminRoutes;
