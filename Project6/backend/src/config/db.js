import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const URL = process.env.MONGODB_URI
        const db = await mongoose.connect(URL)

        console.log(`MongoDB connected successfully`);
    } catch (error) {
        console.error(`MongoDB connection failed:  ${error}`);
    }
} 