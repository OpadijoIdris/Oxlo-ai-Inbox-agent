import type { Request, Response } from "express";
import { BusinessProfileService } from "../services/businessProfile.service.js";

export const getBusinessProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const profile = await BusinessProfileService.getProfile(userId);
    res.json(profile);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const upsertBusinessProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const profile = await BusinessProfileService.upsertProfile(userId, req.body);
    res.json(profile);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
