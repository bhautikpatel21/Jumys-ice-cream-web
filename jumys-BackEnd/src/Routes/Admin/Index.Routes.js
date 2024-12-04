const adminRoutes = require('express').Router();
const loginRoutes = require('./Login.Routes');
const cartRoutes = require('./Cart.Routes');
const productRoutes = require ('./Product.Routes');

adminRoutes.use('/login',loginRoutes);
adminRoutes.use('/cart',cartRoutes);
adminRoutes.use('/product',productRoutes);

module.exports = adminRoutes;