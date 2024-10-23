const express = require('express');
const WishlistRoutes = express.Router();
const { userVerifyToken } = require('../../Helpers/UserVerifyToken');

const { addNewWishlist,  deleteWishlist, getAllWishlist } = require('../../Controller/User/Wishlist.controller');

WishlistRoutes.post('/add-New-wishlist' , userVerifyToken , addNewWishlist);

WishlistRoutes.get('/get-All-wishlist', userVerifyToken, getAllWishlist);

WishlistRoutes.delete('/delete-wishlist' , userVerifyToken , deleteWishlist);

module.exports = WishlistRoutes;