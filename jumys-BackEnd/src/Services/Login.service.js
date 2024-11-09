const User  = require('../Model/Login.Model');
const jwt = require('jsonwebtoken');

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
    };

    // logout user 

    async logoutUser(token) {
        try {
            return new Promise((resolve, reject) => {
                if (token) {
                  resolve({ message: 'Logged out successfully' });
                } else {
                  reject({ message: 'No token provided' });
                }
              });
              
        } catch (error) {
            console.log(error);
            console.log("No token Provided");
            return error.message
        }
    }
}