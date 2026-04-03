import prisma from "../lib/prisma.js";

export class BusinessProfileService {
  static async getProfile(userId: string) {
    return prisma.businessProfile.findUnique({
      where: { userId },
    });
  }

  static async upsertProfile(userId: string, data: any) {
    // Filter out undefined values to satisfy strict TypeScript 'exactOptionalPropertyTypes'
    const profileData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    );

    return prisma.businessProfile.upsert({
      where: { userId },
      update: profileData,
      create: {
        userId,
        ...profileData,
      } as any, // Cast to any to handle the dynamic nature of profileData
    });
  }
}
