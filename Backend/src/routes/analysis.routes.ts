import express from "express";
import {
  analyzeMessage,
  getHistory,
  getAnalysisById,
  getDashboardStats,
} from "../controllers/analysis.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect); // All analysis routes are protected

router.post("/", analyzeMessage);
router.get("/", getHistory);
router.get("/stats", getDashboardStats);
router.get("/:id", getAnalysisById);

export default router;
