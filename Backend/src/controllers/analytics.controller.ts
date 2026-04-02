import type { Request, Response } from "express";
import { AnalyticsService } from "../services/analytics.service.js";

export const getAnalyticsStats = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const stats = await AnalyticsService.getAnalytics(userId);
    res.json(stats);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
