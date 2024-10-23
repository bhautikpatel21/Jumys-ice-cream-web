const express = require('express');
const adminRoutes = express.Router();

const {adminVerifyToken} = require('../../Helpers/AdminVerifyToken');

const {
    registerAdmin,
    loginAdmin,
    getAdmin,
    getAllAdmin,
    updateAdmin,
    deleteAdmin

} = require('../../Controller/Admin/Login.controller');

adminRoutes.post('/register-admin',registerAdmin);

adminRoutes.post('/login-admin',loginAdmin);

adminRoutes.get('/get-admin',adminVerifyToken,getAdmin);

adminRoutes.get('/get-all-admin',adminVerifyToken,getAllAdmin);

adminRoutes.put('/update-admin',adminVerifyToken,updateAdmin);

adminRoutes.post('/delete-admin',adminVerifyToken ,deleteAdmin);

module.exports = adminRoutes;