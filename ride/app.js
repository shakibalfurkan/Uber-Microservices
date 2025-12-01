import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import rideRoutes from "./routes/ride.route.js";
dotenv.config();
const app = express();
import connectDB from "./db/db.js";
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", rideRoutes);

export default app;
