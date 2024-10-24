const User  = require('../Model/Login.Model');

module.exports = class loginServices {

    // Add user 

    async addNewUser(body) {
        try {
            return await User.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Get User 

    async getUser(body){
        try {
            return await User.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Get User By Id 

    async getUserById(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Get All Users 

    async getAllUsers(body) {
        try {
            return await User.find(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Update user 

    async updateUser(id,body) {
        try {
            return await User.findByIdAndUpdate(id,{$set : body},{new : true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}