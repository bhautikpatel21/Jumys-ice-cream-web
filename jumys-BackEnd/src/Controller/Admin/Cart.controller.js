const CartServices = require("../../Services/Cart.service");

const cartService = new CartServices();

exports.getAllCart = async (req, res) => {
  try {
    let carts = await cartService
      .getAllCart({ isDelete: false })
      // .populate("user")
      // .populate("cartItem");
    res.status(200).json(carts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error..` });
  }
};