const express = require('express');
const orderRoute = express.Router();
const { userVerifyToken } = require('../../Helpers/UserVerifyToken');

const {
    addNewOrder,
    getAllOrders,
    getOrder,
    deleteOrder
} = require('../../Controller/User/Order.controller');

orderRoute.post('/add-New-Order', userVerifyToken, addNewOrder);

orderRoute.get('/get-All-Order', userVerifyToken, getAllOrders);

orderRoute.get('/get-Order', userVerifyToken, getOrder);

orderRoute.delete('/delete-Order', userVerifyToken, deleteOrder);

module.exports = orderRoute;