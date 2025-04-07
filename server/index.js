import dotenv from "dotenv";
dotenv.config(); // Load environment variables before anything else

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemRoutes from "./routes/items.js";

const MONGO_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/items", itemRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch((err) => console.error(err));