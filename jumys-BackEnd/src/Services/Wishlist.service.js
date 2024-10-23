const Wishlist = require('../Model/Wishlist.Model');

module.exports = class WishlistServieces {

    // ADD NEW Wishlist
    async addNewWishlist(body) {
        try {
            return await Wishlist.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET ALL Wishlist
    async getAllWishlist(query) {
        try {
            let find = [
                { $match: { isDelete: false}}
            ];
            let result = await Wishlist.aggregate(find);
            return result;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // UPDATE Wishlist
    async updateWishlist(id, body) {
        try {
            return await Wishlist.findByIdAndUpdate(id, { $set: body }, { new: true });
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SPECIFIC Wishlist
    async getWishlist(body) {
        try {
            return await Wishlist.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // GET SINGLE Wishlist BY ID
    async getWishlistById(id) {
        try {
            return await Wishlist.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}