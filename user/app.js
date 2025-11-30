import express from "express";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

dotenv.config();
connectDB();

app.use("/", userRoutes);

export default app;
