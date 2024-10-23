const userRoutes = require('express').Router();
const loginRoutes = require('./Login.Routes');
const productRoutes = require('./Product.Routes');
const cartRoutes = require('./Cart.Routes');

userRoutes.use('/login',loginRoutes);
userRoutes.use('/product',productRoutes);
userRoutes.use('/cart',cartRoutes);

module.exports = userRoutes;