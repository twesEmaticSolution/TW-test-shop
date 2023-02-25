import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, console.log(`server running on port ${PORT}`));
