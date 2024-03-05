import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDatabase = async () => {
  try {
    const MONGODB_URI: any = process.env.MONGODB_URL;
    await mongoose.connect(
      "mongodb+srv://pineconeteam4:PineTeam4@e-commerce.50jehis.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce"
    );
    console.log("connect");
  } catch (error: unknown) {
    // throw new Error("Database cannot connect");
    console.log(error);
  }
};
export { connectDatabase };
