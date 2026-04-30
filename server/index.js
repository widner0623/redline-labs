import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { sendContactEmail } from "./routes/contact.js";

dotenv.config();

const app = express();

// 🔥 Middleware
app.use(cors({
  origin: [
    "http://localhost:5173", // dev
    "https://yourdomain.com" // production (change later)
  ],
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(express.json());

// 🔥 MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// 🔥 Routes
app.get("/", (req, res) => {
  res.send("Redline Labs API is running");
});

app.post("/api/contact", sendContactEmail);

// 🔥 Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});