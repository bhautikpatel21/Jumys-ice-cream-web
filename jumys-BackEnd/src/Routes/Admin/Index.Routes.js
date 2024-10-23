const adminRoutes = require('express').Router();
const loginRoutes = require('./Login.Routes');
const productRoutes = require('./Product.Routes');
const cartRoutes = require('./Cart.Routes');

adminRoutes.use('/login',loginRoutes);
adminRoutes.use('/product',productRoutes);
adminRoutes.use('/cart',cartRoutes);

module.exports = adminRoutes;