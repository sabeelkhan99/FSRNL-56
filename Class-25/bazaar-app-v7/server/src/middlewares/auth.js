import jwt from 'jsonwebtoken';
import { AuthorizationError } from '../core/ApiError.js';

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