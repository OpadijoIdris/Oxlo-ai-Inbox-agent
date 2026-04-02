import prisma from "../lib/prisma.js";
import { OxloService } from "./oxlo.service.js";

export class AnalysisService {
  static async analyzeAndSave(userId: string, originalMessage: string) {
    const startTime = Date.now();
    
    // Pass userId to make the AI aware of the company profile
    const analysis = await OxloService.analyzeMessage(userId, originalMessage);
    
    const endTime = Date.now();
    const responseTimeMinutes = Math.max(1, Math.round((endTime - startTime) / 60000)); // Min 1 minute for analytics

    const savedAnalysis = await prisma.analysis.create({
      data: {
        userId,
        originalMessage,
        ...analysis,
        resolved: false,
        responseTimeMinutes,
      },
    });

    return savedAnalysis;
  }

  static async getUserHistory(userId: string) {
    return prisma.analysis.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getAnalysisById(id: string, userId: string) {
    return prisma.analysis.findFirst({
      where: { id, userId },
    });
  }

  static async getDashboardStats(userId: string) {
    const total = await prisma.analysis.count({ where: { userId } });
    const highUrgency = await prisma.analysis.count({
      where: { userId, urgency: "High" },
    });
    const angrySentiment = await prisma.analysis.count({
      where: {
        userId,
        sentiment: { contains: "angry", mode: "insensitive" }, // Simplified
      },
    });
    const latest = await prisma.analysis.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return { total, highUrgency, angrySentiment, latest };
  }
}
