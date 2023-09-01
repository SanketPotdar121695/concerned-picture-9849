const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true},
// quantity:Number
})

const cartModel=mongoose.model('cart',cartSchema);

module.exports=cartModel;
