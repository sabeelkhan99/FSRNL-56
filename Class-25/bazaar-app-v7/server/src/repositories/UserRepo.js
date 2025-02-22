import User from "../models/User.js";

class UserRepo{
    static findByUsername(username) {
        return User.findOne({ username });
    }

    static createUser(username, hash, email) {
        return User.create({ username, password: hash, email });
    }

    static findByUserId(userId) {
        return User.findById(userId);
    }
}

export default UserRepo;
