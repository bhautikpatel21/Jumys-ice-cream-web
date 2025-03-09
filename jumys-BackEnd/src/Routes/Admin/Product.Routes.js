const express = require('express');
const productRoutes = express.Router();

const { adminVerifyToken } = require('../../Helpers/adminVerifyToken');

const {
    addProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../../Controller/Admin/Product.controller');

productRoutes.post('/add-product',adminVerifyToken, addProduct);

productRoutes.get('/get-All-product',adminVerifyToken, getAllProducts);

productRoutes.get('/get-product',adminVerifyToken, getProduct);

productRoutes.put('/update-product',adminVerifyToken, updateProduct);

productRoutes.delete('/delete-product',adminVerifyToken, deleteProduct);

module.exports = productRoutes;