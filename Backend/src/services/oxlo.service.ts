import axios from "axios";
import dotenv from "dotenv";

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
}

export class OxloService {
  static async analyzeMessage(userMessage: string): Promise<AnalysisResponse> {
    if (!OXLO_API_KEY) {
      throw new Error("OXLO_API_KEY is not defined in environment variables");
    }

    const prompt = `
You are a customer support AI assistant.
Analyze the following customer message and return ONLY valid JSON in this exact format:

{
  "category": "String",
  "urgency": "Low | Medium | High",
  "sentiment": "String",
  "summary": "String",
  "suggestedReply": "String",
  "recommendedAction": "String"
}

Customer message:
"""
${userMessage}
"""
    `;

    try {
      const response = await axios.post(
        OXLO_BASE_URL,
        {
          model: "llama-3.2-3b", // Or use a variable from .env
          messages: [{ role: "user", content: prompt }],
          response_format: { type: "json_object" }, // Many OpenAI compatible APIs support this
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
      console.error("Oxlo API Error:", error.response?.data || error.message);
      throw new Error("Failed to analyze message with Oxlo AI");
    }
  }
}
