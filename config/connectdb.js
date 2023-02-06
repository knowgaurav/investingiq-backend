import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "testApp"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('DB connected successfully...');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;