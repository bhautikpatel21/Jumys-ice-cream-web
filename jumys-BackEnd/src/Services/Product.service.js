const Product = require('../Model/Product.model');

module.exports = class ProductServices {

    // ADD NEW PRODUCT
    async addNewProduct(body) {
        try {
            return await Product.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SPECIFIC PRODUCT
    async getProduct(body) {
        try {
            return await Product.findOne(body);      
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET PRODUCT BY ID
    async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // UPDATE PRODUCT
    async updateProduct(id, body) {
        try {
            return await Product.findByIdAndUpdate(id, { $set: body} , { new : true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET ALL PRODUCT
    async getAllProducts(body) {
        try {
            return await Product.find(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // DELETE PRODUCT 
    async deleteProduct(id) {
        try {
            return await Product.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}