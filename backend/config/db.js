import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to db...");
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export default connectDB;