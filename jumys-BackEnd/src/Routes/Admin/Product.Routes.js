const express = require('express');
const productRoutes = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const {
    addProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../../Controller/Admin/Product.controller');

const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Save images in "uploads" folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });

// Routes with image upload handling
productRoutes.post('/add-product', upload.fields([
    { name: 'img1', maxCount: 1 }, // Single image
    { name: 'imageList', maxCount: 5 } // Multiple images (max 5)
]), addProduct);

productRoutes.get('/get-All-product', getAllProducts);
productRoutes.get('/get-product', getProduct);
productRoutes.put('/update-product', upload.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'imageList', maxCount: 5 }
]), updateProduct);
productRoutes.delete('/delete-product', deleteProduct);

module.exports = productRoutes;
