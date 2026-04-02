import express from "express";
import { getAnalyticsStats } from "../controllers/analytics.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getAnalyticsStats);

export default router;
