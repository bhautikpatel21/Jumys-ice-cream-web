const adminRoutes = require('express').Router();
const loginRoutes = require('./Login.Routes');
const cartRoutes = require('./Cart.Routes');
const Productrouter = require('./Product.Routes')

adminRoutes.use('/login',loginRoutes);
adminRoutes.use('/product',Productrouter);
adminRoutes.use('/cart',cartRoutes);

module.exports = adminRoutes;