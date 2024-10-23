const mongoose = require('mongoose');

const WishlistSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jumys_users'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
  
    isDelete:{
        type:Boolean,
        default:false
    }
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('Wishlist' , WishlistSchema);