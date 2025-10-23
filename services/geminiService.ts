
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateCareerTips = async (): Promise<string> => {
  if (!API_KEY) {
    return "API Key not configured. Please set the API_KEY environment variable.";
  }
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: 'Generate 5 actionable and modern career tips for job seekers in Pakistan. Format the response as a markdown list.',
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    return "Failed to generate career tips. Please check the console for more details.";
  }
};
