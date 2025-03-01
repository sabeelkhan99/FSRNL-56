import express from 'express';
import Product from '../models/Product.js';
import Review from '../models/Review.js';
import catchAsync from '../core/catchAsync.js';

const router = express.Router();

router.post('/products/:productId/reviews', catchAsync(async (req, res) => {
    const { productId } = req.params;
    const { rating, review } = req.body;
    
    const product = await Product.findById(productId);
    
    // create review in reviews collection
    const newReview = await Review.create({ rating, review });

    // Push the reviews id to the product.
    product.reviews.push(newReview);

    // Save the product again since the id of review was add (product got changed).
    await product.save();

    res.status(201).json({message: 'review created successfully'});
}));

router.get('/products/:productId/reviews', catchAsync(async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId)
        .populate('reviews');
    res.status(200).json(product.reviews);
}));


export default router;