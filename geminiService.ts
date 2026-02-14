
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getScholarshipAdvice(program: string, score: number, subject: string): Promise<string> {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest potential scholarships and a realistic study plan for a student interested in studying ${subject} at the ${program} level in the UK. Their current academic score is ${score}%. Provide a concise summary in 3 bullet points.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text || "Unable to retrieve advice at this time.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "Something went wrong. Please try again later.";
  }
}

export async function getCounselingResponse(query: string): Promise<string> {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are an expert education consultant named Admivo AI. Help students with UK university choices, visa processes, and life abroad. Be professional, encouraging, and informative.",
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "Error connecting to counseling service.";
  }
}
