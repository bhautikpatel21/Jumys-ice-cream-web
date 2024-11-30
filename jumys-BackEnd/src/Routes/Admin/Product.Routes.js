// const express = require('express');
// const productRoutes = express.Router();

// const {
    
//     addNewProduct,
//     getAllProducts,
//     getProduct,
//     updateProduct,
//     deleteProduct

// } = require('../../Controller/Admin/Product.controller');

// productRoutes.post('/add-product', addNewProduct);

// productRoutes.get('/get-All-product', getAllProducts);

// productRoutes.get('/get-product', getProduct);

// productRoutes.put('/update-product', updateProduct);

// productRoutes.delete('/delete-product', deleteProduct);

// module.exports = productRoutes;


const express = require('express');
const ProductController = require('../../Controller/Admin/Product.controller');

const Productrouter = express.Router();

// Add product
Productrouter.post('/add-product', ProductController.addProduct);

// Get a single product by productId
Productrouter.get('/:productId', ProductController.getProduct);

// Get all products
Productrouter.get('/', ProductController.getAllProducts);

// Update product
Productrouter.put('/:productId', ProductController.updateProduct);

// Delete product
Productrouter.delete('/:productId', ProductController.deleteProduct);

module.exports = Productrouter;