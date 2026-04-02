import express from "express";
import { getBusinessProfile, upsertBusinessProfile } from "../controllers/businessProfile.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getBusinessProfile);
router.post("/", protect, upsertBusinessProfile);
router.put("/", protect, upsertBusinessProfile);

export default router;
