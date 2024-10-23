const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String,      
        unique: true
    },
    password: {
        type: String,
        required: true
    },
   
    isDelete: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('Jumys_users', loginSchema);