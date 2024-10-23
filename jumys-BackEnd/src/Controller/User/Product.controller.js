const ProductServieces = require('../../Services/Product.service');
const productServiece = new ProductServieces();

exports.getAllProducts = async (req, res) => {
    try {
        let product = await productServiece.getAllProducts({ isDelete : false});
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

exports.getProduct = async (req, res) => {
    try {
        let product = await productServiece.getProductById(req.query.productId);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
}