const express = require('express');
const cartRotes = express.Router();
const { userVerifyToken } = require('../../Helpers/UserVerifyToken');

const {
    addToCart,
    getAllCarts,
    getCart,
    updateCart,
    deleteCart
} = require('../../Controller/User/Cart.controller');

cartRotes.post('/add-Cart', userVerifyToken, addToCart);

cartRotes.get('/get-All-Cart', userVerifyToken, getAllCarts);

cartRotes.get('/get-Cart', userVerifyToken, getCart);

cartRotes.put('/update-cart', userVerifyToken, updateCart);

cartRotes.delete('/delete-Cart', userVerifyToken, deleteCart);

module.exports = cartRotes;
