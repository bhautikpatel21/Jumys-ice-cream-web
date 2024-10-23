const OrderServices = require('../../Services/Order.service');
const orderService = new OrderServices();
const CartServices = require('../../Services/Cart.service');
const cartService = new CartServices();

exports.addNewOrder = async(req, res) => {
    try {
        let cartItems = await cartService.getAllCarts({ user: req.user._id, isDelete: false});
        if (!cartItems) {
            res.status(404).json({ message: `Cart Not Found...`});
        }
        let orderItems = await cartItems.map(item => ({
            product: item.cartItem._id,
            quantity: item.quantity,
            price: item.cartItem.price
        }));
        let totalPrice = orderItems.reduce((total, item) => total + (item.price * item.quantity),0);
        let newOrder = await orderService.addToOrder({
            user: req.user._id,
            items: orderItems,
            totalAmount: totalPrice
        });
        newOrder.save();
        await cartService.updateMany({ user: req.user._id}, {$set: { isDelete: true}});
        res.status(201).json({newOrder, message: `Order Place Successfuly...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        let orders = await orderService.getAllOrders({ user: req.user._id,  isDelete: false });
        console.log(orders);
        if (!orders) {
            res.status(404).json({ message: `Orders Not Found...`});
        }
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    }
};

exports.getOrder = async (req, res) => {
    try {
        let order = await orderService.getOrderById({_id: req.query.orderId, isDelete: false});
        console.log(order);
        if (!order) {
            res.status(404).json({ message: `Orders Not Found...`});
        }
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        let order = await orderService.getOrder({_id: req.query.orderId});
        console.log(order);
        if (!order) {
            res.status(404).json({ message: `Orders Not Found..Plase Try Again...`});
        }
        order = await orderService.deleteOrder(req.body.orderId, {isDelete: true })
        res.status(200).json({order, message: `Your Order Deleted Successfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error ${console.error()}`});
    } 
};