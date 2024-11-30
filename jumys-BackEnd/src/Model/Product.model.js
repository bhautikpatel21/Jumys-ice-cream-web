// const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   rev: {
//     type: String,
//     required: true
//   },
//   img1: {
//     type: String,
//     required: true
//   },
//   img2: {
//     type: String,
//     required: true
//   },
//   ProductId: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   size: {
//     type: [String],  // Array of strings for sizes (like 'S', 'M', 'L','XL')
//     required: true
//   },
//   imageList: {
//     type: [String],  // Array of image URLs or paths
//     required: true
//   }
// });

// const Product = mongoose.model('Products', productSchema);

// module.exports = Product;

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: [String],
    review: { type: String },
    color: { type: String, required: true },
    mainImage: { type: String, required: true },
    otherImages: [String],
    productId: { type: String, unique: true, required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
