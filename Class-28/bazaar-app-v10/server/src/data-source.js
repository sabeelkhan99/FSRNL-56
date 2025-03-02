import mongoose from 'mongoose';

const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/bazaar_db';


class AppDataSource{
    static async connect() {
        console.log(`Connecting to ${dbUrl}`);
        await mongoose.connect(dbUrl);
    }
}

export default AppDataSource;