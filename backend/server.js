import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

// allow us to accept json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server running on port ${PORT}`));
