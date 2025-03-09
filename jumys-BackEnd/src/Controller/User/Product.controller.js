const ProductServieces = require('../../Services/Product.service');
const productServiece = new ProductServieces();

exports.addProduct = async(req,res) => {
    try {
        let product = await productServiece.getProduct({name : req.body.name});

        if(product) {
            res.status(400).json({message : `Product alreaddy added.....`})
        }

        product = await productServiece.addNewProduct({...req.body});

        res.status(201).json({product,message : `Product added successfully..........`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Interanal server error.....${console.error()}`});
    }
};

exports.getProduct = async(req,res) => {
    try {
        let product = await productServiece.getProduct({name : req.body.name});

        if(!product) {
            res.status(404).json({message : `Product does not found..........`});
        }

        res.status(200).json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Interanal server error........${console.error()}`});
    }
};

exports.getProductbyId = async(req,res) => {
    try {
        let product = await productServiece.getProductById(req.query.productId);

        if(!product) {
            return res.status(404).json({message : `Product is not found.......`});
        }

        res.status(200).json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Interanal server error........${console.error()}`});
    }
};

exports.getAllProducts = async(req,res) => {
    try {
        let products = await productServiece.getAllProducts({isDelete : false});

        if(!products) {
            return res.status(404).json({message : `products is not found......`});
        }

        res.status(200).json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Interanal server error........${console.error()}`});
    }
};

exports.updateProduct = async(req,res) => {
    try {
        let product = await productServiece.getProductById(req.query.productId);

        if(!product) {
            return res.status(404).json({message : `product is not found........`});
        }

        product = await productServiece.updateProduct(product._id,{...req.body});

        res.status(201).json({product, message : `Product update successfully.......`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Interanal server error........${console.error()}`});
    }
};

exports.deleteProduct = async(req,res) => {
    try {
        let product = await productServiece.getProductById(req.query.productId);

        if(!product) {
            return res.status(404).json({message : `Product is not found.....`});
        }

        product = await productServiece.updateProduct(product._id,{isDelete : true});

        res.status(200).json({product, message : `Product delete duccessfully...........`});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Interanal server error........${console.error()}`});
    }
}