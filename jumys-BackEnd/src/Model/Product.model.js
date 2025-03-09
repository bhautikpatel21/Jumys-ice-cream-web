const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    rev :  {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    color : {
        type : String,
        required : true
    },

    img1 : {
        type : String,
        required : true
    },

    imageList : {
        type : [String],
        required : true
    },

    size : {
        type : [String],
        required : true
    },

    ProductId : {
        type : Number,
        required : true
    },

    isDelete : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('product',productSchema);