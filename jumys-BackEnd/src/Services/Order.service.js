const Order = require('../Model/Order.Model');

// ADD TO ORDER
module.exports = class OrderServices{
    async addToOrder (body) {
        try {
            return await Order.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

// GET ALL ORDER
    async getAllOrders (body) {
        try {
            return await Order.find(body).populate('user').populate('items');
        } catch (error) {
            console.log(error);
            return error.message;            
        }
    };

// GET SPECIFIC ORDER
    async getOrder (body) {
        try {
            return await Order.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

// GET SPECIFIC ORDER BY ID
    async getOrderById (id) {
        try {
            return await Order.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

// DELETE ORDER
    async deleteOrder (id, body){
        try {
            return await Order.findOneAndUpdate(id, { $set: body} , { new : true }).populate('user').populate('items');
        } catch (error) {
            console.log(error);
            return error.message;  
        }
    }
}