import dotenv from "dotenv";
dotenv.config(); // Load environment variables before anything else

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemRoutes from "./routes/items.js";

const MONGO_URI = process.env.MONGODB_URI;
const USERNAME = process.env.ADMIN_USERNAME
const PASSWORD = process.env.ADMIN_PASSWORD 

const app = express();
app.use(cors());
app.use(express.json());

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    return res.status(200).json({ success: true, message: "Login successful" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Item routes
app.use("/api/items", itemRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch((err) => console.error(err));