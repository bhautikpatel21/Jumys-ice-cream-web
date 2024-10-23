const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rev: {
    type: String,
    required: true
  },
  img1: {
    type: String,
    required: true
  },
  img2: {
    type: String,
    required: true
  },
  ProductId: {
    type: String,
    required: true,
    unique: true
  },
  size: {
    type: [String],  // Array of strings for sizes (like 'S', 'M', 'L','XL')
    required: true
  },
  imageList: {
    type: [String],  // Array of image URLs or paths
    required: true
  }
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
