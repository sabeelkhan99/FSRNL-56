import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    review: {
        type: String,
        trim: true
    }
}, {versionKey: false, timestamps: true});

const Review = mongoose.model('Review', reviewSchema, 'reviews');

export default Review;