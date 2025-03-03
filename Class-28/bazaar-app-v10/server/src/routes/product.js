import express from 'express';
import Product from '../models/Product.js';
import catchAsync from '../core/catchAsync.js';
import { AuthorizationError, BadRequestError, InternalServerError } from '../core/ApiError.js';
import Logger from '../core/Logger.js';
import { isLoggedIn, isSeller, isProductAuthor } from '../middlewares/auth.js';

const router = express.Router();

// Get All products
// Todo: Implement paging and sort
// Paging : pageNo and pageSize 
router.get('/products', catchAsync(async (req, res) => {
    Logger.info("Fetch all products request recieved");
    const products = await Product.find({});
    res.status(200).json(products);
}));


// Create new Product
router.post('/products', isLoggedIn, isSeller, catchAsync(async (req, res) => {
    Logger.info("Create product request recieved");
    const { userId } = req;
    const { title, description, image, price } = req.body;
    await Product.create({ title, description, image, price, author: userId });
    res.status(201).json({ message: 'Product created successfully' });
}));

// Show a product
router.get('/products/:productId', catchAsync(async(req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
        throw BadRequestError('Product with Id not found')
    }
    res.status(200).json(product);
}));

// Update a product
router.patch('/products/:productId', isLoggedIn, isSeller, isProductAuthor, catchAsync(async(req, res) => {
    const { productId } = req.params;
    const { title, description, image, price } = req.body;
    await Product.findByIdAndUpdate(productId, { title, description, image, price });
    res.status(200).json({ message: 'product updated successfully' });
}));

// Delete a product
router.delete('/products/:productId',isLoggedIn, isSeller, isProductAuthor, catchAsync( async(req, res) => {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: 'product deleted successfullly' });
}));

export default router;