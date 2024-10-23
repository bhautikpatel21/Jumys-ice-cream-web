const userRoutes = require('express').Router();
const loginRoutes = require('./Login.Routes');
const productRoutes = require('./Product.Routes');

userRoutes.use('/login',loginRoutes);
userRoutes.use('/product',productRoutes);

module.exports = userRoutes;