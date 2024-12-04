const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: [String],
    review: { type: String },
    color: { type: String, required: true },
    // mainImage: { type: String, required: true },
    // otherImages: [String],
    ProductId: { type: String, unique: true, required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
