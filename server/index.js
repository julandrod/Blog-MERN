import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import cors from "cors";

// Api routes
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

// App config
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Api endpoints
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// Listener
app.listen(port, () => console.log(`Start listening in port ${port}`));
