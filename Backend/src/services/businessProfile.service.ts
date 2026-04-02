import prisma from "../lib/prisma.js";

export class BusinessProfileService {
  static async getProfile(userId: string) {
    return prisma.businessProfile.findUnique({
      where: { userId },
    });
  }

  static async upsertProfile(userId: string, data: any) {
    const { 
      companyName, 
      companyDescription, 
      supportTone, 
      refundPolicy, 
      deliveryPolicy, 
      businessHours, 
      faq, 
      escalationInstructions, 
      brandVoiceExamples, 
      restrictedPhrases 
    } = data;

    return prisma.businessProfile.upsert({
      where: { userId },
      update: {
        companyName,
        companyDescription,
        supportTone,
        refundPolicy,
        deliveryPolicy,
        businessHours,
        faq,
        escalationInstructions,
        brandVoiceExamples,
        restrictedPhrases,
      },
      create: {
        userId,
        companyName,
        companyDescription,
        supportTone,
        refundPolicy,
        deliveryPolicy,
        businessHours,
        faq,
        escalationInstructions,
        brandVoiceExamples,
        restrictedPhrases,
      },
    });
  }
}
