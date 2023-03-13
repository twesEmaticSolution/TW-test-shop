import express from "express";
import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", protect, addOrderItems);

export default router;
