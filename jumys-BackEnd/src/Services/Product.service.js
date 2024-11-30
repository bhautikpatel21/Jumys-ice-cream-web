// const Product = require('../Model/Product.model');

// module.exports = class ProductServices {

//     // ADD NEW PRODUCT
//     async addNewProduct(body) {
//         try {
//             return await Product.create(body);
//         } catch (error) {
//             console.log(error);
//             return error.message;
//         }
//     };

//     // GET SPECIFIC PRODUCT
//     async getProduct(body) {
//         try {
//             return await Product.findOne(body);      
//         } catch (error) {
//             console.log(error);
//             return error.message;
//         }
//     };

//     // GET PRODUCT BY ID
//     async getProductById(id) {
//         try {
//             return await Product.findById(id);
//         } catch (error) {
//             console.log(error);
//             return error.message;
//         }
//     };

//     // UPDATE PRODUCT
//     async updateProduct(id, body) {
//         try {
//             return await Product.findByIdAndUpdate(id, { $set: body} , { new : true });
//         } catch (error) {
//             console.log(error);
//             return error.message;
//         }
//     };

//     // GET ALL PRODUCT
//     async getAllProducts(query) {
//         try {
//             let categoryWise = query.category && query.category !=="" ? [
//                 { $match: { category: query.category} }
//             ] : [];
//             let find = [
//                 { $match : { isDelete: false} },
//                 ...categoryWise
//             ];

//             let result = await Product.aggregate(find);
//             return result;

//         } catch (error) {
//             console.log(error);
//             return error.message;
//         }
//     }
// }

const Product = require('../Model/Product.model');

class ProductService {
    static async addProduct(data) {
        const product = new Product(data);
        return await product.save();
    }

    static async getProductById(productId) {
        return await Product.findOne({ productId });
    }

    static async getAllProducts() {
        return await Product.find();
    }

    static async updateProduct(productId, data) {
        return await Product.findOneAndUpdate({ productId }, data, { new: true });
    }

    static async deleteProduct(productId) {
        return await Product.findOneAndDelete({ productId });
    }
}

module.exports = ProductService;
