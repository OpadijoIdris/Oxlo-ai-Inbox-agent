import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AnalysisService } from '../analysis.service.js';
import prisma from '../../lib/prisma.js';
import { OxloService } from '../oxlo.service.js';

vi.mock('../../lib/prisma.js', () => ({
  default: {
    analysis: {
      create: vi.fn(),
      findMany: vi.fn(),
      findFirst: vi.fn(),
      count: vi.fn(),
    },
  },
}));

vi.mock('../oxlo.service.js', () => ({
  OxloService: {
    analyzeMessage: vi.fn(),
  },
}));

describe('AnalysisService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('analyzeAndSave', () => {
    it('should call OxloService and save results', async () => {
      const mockOxloResult = {
        category: 'Support',
        urgency: 'High',
        sentiment: 'Positive',
        summary: 'Brief summary',
        suggestedReply: 'Hello...',
        recommendedAction: 'Keep it up',
      };
      const userId = 'user-123';
      const message = 'Hello, help me!';
      const savedResult = { id: 'analysis-1', userId, originalMessage: message, ...mockOxloResult, resolved: false, responseTimeMinutes: 1, createdAt: new Date() };

      (OxloService.analyzeMessage as any).mockResolvedValue(mockOxloResult);
      (prisma.analysis.create as any).mockResolvedValue(savedResult);

      const result = await AnalysisService.analyzeAndSave(userId, message);

      expect(OxloService.analyzeMessage).toHaveBeenCalledWith(userId, message);
      expect(prisma.analysis.create).toHaveBeenCalled();
      expect(result.id).toBe('analysis-1');
    });
  });
});
