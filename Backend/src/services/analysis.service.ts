import { PrismaClient } from "@prisma/client/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { OxloService } from "./oxlo.service.js";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export class AnalysisService {
  static async analyzeAndSave(userId: string, originalMessage: string) {
    const analysis = await OxloService.analyzeMessage(originalMessage);

    const savedAnalysis = await prisma.analysis.create({
      data: {
        userId,
        originalMessage,
        ...analysis,
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
