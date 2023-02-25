import mongoose from "mongoose";
import dotenv from "dotenv";
mongoose.set("strictQuery", false);

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
}

export default connectDB;
