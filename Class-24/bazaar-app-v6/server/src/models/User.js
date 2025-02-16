import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    email: String
}, { timestamps: true, versionKey: false });


const User = mongoose.model('User', userSchema);

export default User;