import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.error("Captain service database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
