import express from 'express';
import bcrypt from 'bcrypt';
import catchAsync from '../core/catchAsync.js';
import UserRepo from '../repositories/UserRepo.js';
import { BadRequestError } from '../core/ApiError.js';

const router = express.Router();

router.post('/register', catchAsync(async (req, res) => {
    const { username, password, email } = req.body;
    
    // check user with the given username already exists?
    const user = await UserRepo.findByUsername(username);

    // If user with the given username already exist then break the flow and send badrequest
    if (user) {
        throw new BadRequestError(`User with the username ${username} already exists`);
    }

    // Generate password hash
    const passwordHash = await bcrypt.hash(password, 12);

    //  create new user in the DB
    const newUser = await UserRepo.createUser(username, passwordHash, email);

    res.send(newUser);
}));


// Login

router.post('/login', (req, res) => {
    res.send('login');
})

export default router;