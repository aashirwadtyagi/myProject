import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Connected")
    } catch (error) {
        console.log("Error:", error)
        process.exit(1);
    }
}
export default connectDB;