import User from "../models/User.js";

class UserRepo{
    static findByUsername(username) {
        return User.findOne({ username });
    }

    static createUser(username, hash, email, role) {
        return User.create({ username, password: hash, email, role });
    }

    static findByUserId(userId) {
        return User.findById(userId);
    }
}

export default UserRepo;
