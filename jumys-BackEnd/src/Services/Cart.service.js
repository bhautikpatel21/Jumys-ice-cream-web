const Cart = require('../Model/Card.Model');

module.exports = class CartServices {

    // ADD TO CART
    async addToCart(body) {
        try {
            return await Cart.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET ALL CART
    async getAllCart(query) {
        try {
            let find = [
                { $match: { isDelete: false}}
            ];
            let result = await Cart.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SPECIFIC CART
    async getCart(body) {
        try {
            return await Cart.findOne(body).populate('cartItem');
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET CART BY ID
    async getCartById(id) {
        try {
            return await Cart.findById(id).populate('cartItem');
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // UPDATE CART
    async updateCart(id, body) {
        try {
            return await Cart.findByIdAndUpdate(id, {$set: body}, {new: true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SPECIFIC CART
    async getAllCarts(body) {
        try {
            return await Cart.find(body).populate('cartItem');
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // UPDATE MANY
    async updateMany(body) {
        try {
            return await Cart.updateMany(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };
}