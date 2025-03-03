import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        index: true
    },
    password: String,
    email: String,
    role: {
        type: String,
        enum: ['SELLER', 'BUYER', 'ADMIN'],
    }
}, { timestamps: true, versionKey: false });


userSchema.methods.hasRole = function (role) {
    return this.role === role;
}


const User = mongoose.model('User', userSchema);

export default User;