import express from 'express';
import bcrypt from 'bcrypt';
import catchAsync from '../core/catchAsync.js';
import UserRepo from '../repositories/UserRepo.js';
import { AuthenticationError, BadRequestError } from '../core/ApiError.js';
import jwt from 'jsonwebtoken';
import { isLoggedIn } from '../middlewares/auth.js';
import userRole from '../enums/userRole.js';

const router = express.Router();

// TODO: Move Environment variable file
const JWT_SECRET = "WENEEDABETTERSECRETHERE";

router.post('/register', catchAsync(async (req, res) => {
    const { username, password, email, role } = req.body;
    
    // check user with the given username already exists?
    const user = await UserRepo.findByUsername(username);

    // If user with the given username already exist then break the flow and send badrequest
    if (user) {
        throw new BadRequestError(`User with the username ${username} already exists`);
    }

    // Generate password hash
    const passwordHash = await bcrypt.hash(password, 12);

    //  create new user in the DB
    const newUser = await UserRepo.createUser(username, passwordHash, email, userRole[role]);

    res.send(newUser);
}));


// Login
router.post('/login', catchAsync(async (req, res) => {
    const { username, password } = req.body;
    // check if the user exist with this username
    const user = await UserRepo.findByUsername(username);

    if (!user) {
        throw new AuthenticationError(`Invalid username/password`);
    }

    // Verify the incoming password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new AuthenticationError('Invalid username/password')
    }

    // Sign the JWT token using JWT secret
    const jwtToken = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({ token: jwtToken, message: 'LoggedIn Successfully' });
}));

// Profile
router.get('/profile', isLoggedIn, catchAsync(async(req, res) => {
    const { userId } = req;
    const user = await UserRepo.findByUserId(userId);
    if (!user) {
        throw new AuthenticationError('Please login again to continue');
    }

    res.send({ username: user.username, email: user.email, role: user.role});
}));

export default router;