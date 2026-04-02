import prisma from "../lib/prisma.js";

export class KnowledgeService {
  static async createKnowledgeBase(userId: string, name: string, description?: string) {
    return prisma.knowledgeBase.create({
      data: { userId, name, description }
    });
  }

  static async addSnippet(knowledgeBaseId: string, content: string, metadata?: any) {
    return prisma.documentSnippet.create({
      data: { knowledgeBaseId, content, metadata }
    });
  }

  static async getRelevantContext(userId: string, query: string) {
    // FALLBACK: Simple text search since pgvector is not yet available
    // We search the keywords from the query across all user's knowledge bases
    const keywords = query.split(' ').filter(k => k.length > 3);
    
    if (keywords.length === 0) return "";

    const snippets = await prisma.documentSnippet.findMany({
      where: {
        knowledgeBase: { userId },
        OR: keywords.map(keyword => ({
          content: { contains: keyword, mode: 'insensitive' }
        }))
      },
      take: 5
    });

    return snippets.map(s => s.content).join("\n\n");
  }
}
