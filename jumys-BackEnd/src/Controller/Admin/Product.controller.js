const ProductServieces = require('../../Services/Product.service');
const productServiece = new ProductServieces();

exports.addProduct = async (req, res) => {
    try {
        // Validate required fields
        const { name, rev, price, color, ProductId, size } = req.body;
        const requiredFields = { name, rev, price, color, ProductId, size };
        
        const missingFields = Object.entries(requiredFields)
            .filter(([_, value]) => !value)
            .map(([key]) => key);

        if (missingFields.length > 0) {
            return res.status(400).json({ 
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`
            });
        }

        // Validate image uploads
        if (!req.files?.img1?.[0] || !req.files?.imageList) {
            return res.status(400).json({
                success: false,
                message: "Main image and at least one additional image are required"
            });
        }

        // Prepare product data with proper type conversion
        const productData = {
            name: name.trim(),
            rev: rev.trim(),
            price: parseFloat(price),
            color: color.trim(),
            ProductId: parseInt(ProductId),
            size: size.split(',').map(s => s.trim()),
            img1: req.files.img1[0].path,
            imageList: req.files.imageList.map(file => file.path)
        };

        // Validate numeric fields
        if (isNaN(productData.price) || isNaN(productData.ProductId)) {
            return res.status(400).json({
                success: false,
                message: "Price and ProductId must be valid numbers"
            });
        }

        // Check for existing product
        const existingProduct = await productServiece.getProduct({ name: productData.name });
        if (existingProduct) {
            return res.status(409).json({
                success: false,
                message: "Product with this name already exists"
            });
        }

        // Create new product
        const product = await productServiece.addNewProduct(productData);
        if (!product) {
            throw new Error("Failed to create product");
        }

        return res.status(201).json({
            success: true,
            message: "Product added successfully",
            product
        });

    } catch (error) {
        console.error("Add product error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to add product",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
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