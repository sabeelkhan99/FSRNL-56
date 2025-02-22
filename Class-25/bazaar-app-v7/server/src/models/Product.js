import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String
}, { timestamps: true, versionKey: false });


const Product = mongoose.model('Product', productSchema);

export default Product;