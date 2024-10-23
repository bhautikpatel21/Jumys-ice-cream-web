const express = require('express');
const productRoutes = express.Router();

const {
    
    addNewProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct

} = require('../../Controller/Admin/Product.controller');

productRoutes.post('/add-product', addNewProduct);

productRoutes.get('/get-All-product', getAllProducts);

productRoutes.get('/get-product', getProduct);

productRoutes.put('/update-product', updateProduct);

productRoutes.delete('/delete-product', deleteProduct);

module.exports = productRoutes;