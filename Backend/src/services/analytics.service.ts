import prisma from "../lib/prisma.js";

export class AnalyticsService {
  static async getAnalytics(userId: string) {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));

    // 1. Basic Stats Cards
    const totalAnalyses = await prisma.analysis.count({ where: { userId } });
    
    if (totalAnalyses === 0) {
      return {
        totalAnalyses: 0,
        highUrgencyPercentage: 0,
        angrySentimentPercentage: 0,
        averageConfidence: 0,
        averageResponseTime: 0,
        analysesPerDay: [],
        categoryDistribution: [],
        sentimentDistribution: [],
        hourlyHeatmap: []
      };
    }

    const highUrgencyCount = await prisma.analysis.count({
      where: { userId, urgency: "High" }
    });

    const angrySentimentCount = await prisma.analysis.count({
      where: { 
        userId, 
        sentiment: { contains: "frustrated", mode: "insensitive" } 
      }
    });

    const confidenceAgg = await prisma.analysis.aggregate({
      where: { userId },
      _avg: { confidence: true }
    });

    const responseTimeAgg = await prisma.analysis.aggregate({
      where: { userId },
      _avg: { responseTimeMinutes: true }
    });

    // 2. Analyses Per Day (Last 30 Days)
    const analysesRaw = await prisma.analysis.groupBy({
      by: ['createdAt'],
      where: { userId, createdAt: { gte: thirtyDaysAgo } },
      _count: { id: true }
    });
    
    const analysesPerDay = this.formatDailyStats(analysesRaw);

    // 3. Category Distribution
    const categoryData = await prisma.analysis.groupBy({
      by: ['category'],
      where: { userId },
      _count: { id: true }
    });
    const categoryDistribution = categoryData.map(c => ({ name: c.category, value: c._count.id }));

    // 4. Sentiment Distribution
    const sentimentData = await prisma.analysis.groupBy({
      by: ['sentiment'],
      where: { userId },
      _count: { id: true }
    });
    const sentimentDistribution = sentimentData.map(s => ({ name: s.sentiment, value: s._count.id }));

    // 5. Hourly Heatmap
    const allAnalyses = await prisma.analysis.findMany({
      where: { userId },
      select: { createdAt: true }
    });
    const hourlyHeatmap = this.generateHeatmapData(allAnalyses);

    return {
      totalAnalyses,
      highUrgencyPercentage: Math.round((highUrgencyCount / totalAnalyses) * 100),
      angrySentimentPercentage: Math.round((angrySentimentCount / totalAnalyses) * 100),
      averageConfidence: Math.round(confidenceAgg._avg.confidence || 0),
      averageResponseTime: Math.round(responseTimeAgg._avg.responseTimeMinutes || 0),
      analysesPerDay,
      categoryDistribution,
      sentimentDistribution,
      hourlyHeatmap
    };
  }

  private static formatDailyStats(raw: any[]) {
    const map: Record<string, number> = {};
    raw.forEach(r => {
      const date = r.createdAt.toISOString().split('T')[0];
      map[date] = (map[date] || 0) + r._count.id;
    });
    return Object.entries(map).map(([date, count]) => ({ date, count })).sort((a,b) => a.date.localeCompare(b.date));
  }

  private static generateHeatmapData(analyses: any[]) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const map: Record<string, number> = {};

    analyses.forEach(a => {
      const date = new Date(a.createdAt);
      const day = days[date.getDay()];
      const hour = date.getHours();
      const key = `${day}-${hour}`;
      map[key] = (map[key] || 0) + 1;
    });

    const result: any[] = [];
    for (const day of days) {
      for (let hour = 0; hour < 24; hour++) {
        result.push({
          day,
          hour,
          count: map[`${day}-${hour}`] || 0
        });
      }
    }
    return result;
  }
}
