import mongoose from "mongoose";
import colors from "colors";

const connectDB  = async () => {   
    try {
        // Set the strictQuery option
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`.bgMagenta.white.bold);
    } catch (error) {
        console.error(`Error: ${error.message}`.bgRed.white.bold);
        //process.exit(1);
    }
};  

export default connectDB;