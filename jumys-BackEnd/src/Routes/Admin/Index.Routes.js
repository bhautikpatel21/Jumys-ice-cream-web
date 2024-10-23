const adminRoutes = require('express').Router();
const loginRoutes = require('./Login.Routes');
const productRoutes = require('./Product.Routes');

adminRoutes.use('/login',loginRoutes);
adminRoutes.use('/product',productRoutes);

module.exports = adminRoutes;