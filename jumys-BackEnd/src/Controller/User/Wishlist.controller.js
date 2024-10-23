const WishlistServieces = require("../../Services/Wishlist.service");
const wishlistServieces = new WishlistServieces();

exports.addNewWishlist = async (req, res) => {
  try {
    let Wishlist = await wishlistServieces.getWishlist({
      product: req.body.product,
      user: req.user._id,
      isDelete: false,
    });
    if (Wishlist) {
      return res.status(400).json({ Message: "Wishlist is alredy exist" });
    }
    Wishlist = await wishlistServieces.addNewWishlist({ ...req.body, user: req.user._id });
    res.status(201).json({ Wishlist, Message: "Wishlist is Added..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal server Error" });
  }
};

exports.getAllWishlist = async (req, res) => {
  try {
    let Wishlist = await wishlistServieces.getAllWishlist(req.query);
    res.status(200).json(Wishlist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal server Error" });
  }
}

exports.deleteWishlist = async (req, res) => {
  try {
    let Wishlist = await wishlistServieces.getWishlistById(req.query.Id);
    if (!Wishlist) {
      return res.status(404).json({ Message: "Wishlist is not found" });
    }
    Wishlist = await wishlistServieces.updateWishlist(Wishlist._id, {
      isDelete: true,
    });
    res.status(202).json({ Wishlist, Message: "Wishlist is Deleted..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal server Error" });
  }
};