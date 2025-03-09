const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    count :  {
        type : Number,
        default : 10
    },

    views : {
        type : Number,
        required : true
    },

    sizes : {
        type : [String],
        required : true
    },

    isDelete : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('product',productSchema);