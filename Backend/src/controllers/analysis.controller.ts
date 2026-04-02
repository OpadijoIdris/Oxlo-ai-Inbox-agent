import { type Request, type Response } from "express";
import { AnalysisService } from "../services/analysis.service.js";

export const analyzeMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const userId = (req as any).userId;
    const analysis = await AnalysisService.analyzeAndSave(userId, message);
    res.status(201).json(analysis);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getHistory = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const history = await AnalysisService.getUserHistory(userId);
    res.status(200).json(history);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAnalysisById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).userId;
    const analysis = await AnalysisService.getAnalysisById(id as string, userId);
    if (!analysis) {
      return res.status(404).json({ message: "Analysis not found" });
    }
    res.status(200).json(analysis);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const stats = await AnalysisService.getDashboardStats(userId);
    res.status(200).json(stats);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
