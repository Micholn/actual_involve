const Cart = require("../../models/Cart")
const Review = require("../../models/Review")
const Order = require("../../models/Order")
const Wjislist = require("../../models/Wishlist")

module.exports = async(product,user,type) => {
    let hasOnCart = null 
    let hasBought = null 
    let hasOnWishlist = null 
    let hasReviewed = null 
    if (user) {
        //cart bahek aru lagi 
        if (type !=='cart') {
            //has on cart? 
            hasOnCart = await Cart.finfOne({ user: user._id, produt: product._id, isDeletd: null})
            if (!hasOnCart) hasOnCart = false 
        }

        //wishList bahek 
        if (type !=='wishlists') {
            hasOnWishList = await Whishlist.findOne({ user: user._id, product: product._id, isDeleted: null })
        }
    }
}