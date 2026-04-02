import axios from "axios";
import dotenv from "dotenv";
import prisma from "../lib/prisma.js";
import { KnowledgeService } from "./knowledge.service.js";

dotenv.config();

const OXLO_API_KEY = process.env.OXLO_API_KEY;
const OXLO_BASE_URL = "https://api.oxlo.ai/v1/chat/completions";

export interface AnalysisResponse {
  category: string;
  urgency: "Low" | "Medium" | "High";
  sentiment: string;
  summary: string;
  suggestedReply: string;
  recommendedAction: string;
  confidence: number;
}

export class OxloService {
  static async analyzeMessage(userId: string, userMessage: string, retries = 3): Promise<AnalysisResponse> {
    if (!OXLO_API_KEY) {
      throw new Error("OXLO_API_KEY is not defined in environment variables");
    }

    // 1. Fetch Structured Business Profile
    const profile = await prisma.businessProfile.findUnique({
      where: { userId }
    });

    // 2. Fetch Unstructured Deep Knowledge (RAG)
    const deepKnowledge = await KnowledgeService.getRelevantContext(userId, userMessage);

    const businessContext = profile ? `
Business Information:
- Company Name: ${profile.companyName}
- Description: ${profile.companyDescription || "N/A"}
- Tone: ${profile.supportTone}
- Refund Policy: ${profile.refundPolicy || "N/A"}
- Delivery Policy: ${profile.deliveryPolicy || "N/A"}
- Business Hours: ${profile.businessHours || "N/A"}
- Escalation: ${profile.escalationInstructions || "N/A"}

Retrieved Knowledge Base Context:
${deepKnowledge || "No specific FAQ context found for this message."}

Brand Reply Examples:
${profile.brandVoiceExamples || "N/A"}

Avoid These Phrases:
${profile.restrictedPhrases || "N/A"}
` : "User hasn't configured a business profile yet. Use a professional, friendly, and neutral tone.";

    const prompt = `
You are a highly capable customer support AI assistant.
${businessContext}

Analyze the following customer message and return ONLY valid JSON in this exact format:

{
  "category": "String",
  "urgency": "Low | Medium | High",
  "sentiment": "String",
  "summary": "String",
  "suggestedReply": "String",
  "recommendedAction": "String",
  "confidence": Number (0-100)
}

Customer message:
"""
${userMessage}
"""
    `;

    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.post(
          OXLO_BASE_URL,
          {
            model: "llama-3.2-3b",
            messages: [{ role: "user", content: prompt }],
            response_format: { type: "json_object" },
          },
          {
            headers: {
              Authorization: `Bearer ${OXLO_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        const content = response.data.choices[0].message.content;
        return JSON.parse(content) as AnalysisResponse;
      } catch (error: any) {
        const isTrafficError = 
          error.response?.data?.detail?.toLowerCase().includes("high traffic") || 
          error.response?.status === 429 ||
          error.response?.status === 503;
        
        if (isTrafficError && i < retries - 1) {
          const waitTime = Math.pow(2, i) * 1000;
          console.log(`Oxlo API busy. Retrying in ${waitTime}ms... (Attempt ${i + 1}/${retries})`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }

        console.error("Oxlo API Error:", error.response?.data || error.message);
        throw new Error("Failed to analyze message with Oxlo AI. The service is currently overloaded, please try again in a few seconds.");
      }
    }
    
    throw new Error("Oxlo AI is temporarily unavailable due to high traffic. Please try again shortly.");
  }
}
