import jwt from 'jsonwebtoken';
import { AuthorizationError } from '../core/ApiError.js';
import UserRepo from '../repositories/UserRepo.js';
import Product from '../models/Product.js';

// TODO: Move Environment variable file
const JWT_SECRET = "WENEEDABETTERSECRETHERE";

export const isLoggedIn = (req, res, next) => {
    const token = req.headers?.authorization.replace('Bearer ', '');
    try {
        const { userId } = jwt.verify(token, JWT_SECRET);
        req.userId = userId;
    }
    catch (err) {
        return next(new AuthorizationError('Invalid Token. Please login to continue')); //this will forward the error to the global exception handler
    }
    return next(); //this will call the next middleware function in the stack
}

export const isSeller = async (req, res, next) => {
    const { userId } = req;
    try {
        const user = await UserRepo.findByUserId(userId);

        if (user && !user.hasRole('SELLER')) {
            throw new AuthorizationError('You dont have permission to add product. Please create seller account');
        }
    }
    catch (err) {
        return next(err);
    }
    return next();
}

export const isProductAuthor = async (req, res, next) => {
    const { userId } = req; //current logged in user
    const { productId } = req.params; //product this user want to edit
    const product = await Product.findById(productId);
    if (!product?.author.equals(userId)) {
        return next(new AuthorizationError('You are not the owner of this product'));
    }
    return next();
}