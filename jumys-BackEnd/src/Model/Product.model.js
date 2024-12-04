const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price : {
    type : Number,
    required : true
  },
  color : {
    type : String,
    required : true
  },
  mainImage : {
    type : String,
    required : true
  },
  otherImages : {
    type : [String],
  },
  rev: {
    type: String,
    required: true
  },
  ProductId: {
    type: String,
    required: true,
    unique: true
  },
  sizes: {
    type: [String],  // Array of strings for sizes (like 'S', 'M', 'L','XL')
    required: true
  },

},{
    versionKey : false,
    timeStamp : true
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;