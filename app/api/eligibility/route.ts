import { NextResponse } from 'next/server';
import { ai, SYSTEM_PROMPT } from '../../../lib/gemini';
import services from '../../../database/services.json';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userPrompt, profile } = body;

    // Call Google Gemini API
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: SYSTEM_PROMPT },
            { 
              text: `User Profile: ${JSON.stringify(profile || {})}\nAvailable Schemes: ${JSON.stringify(services)}\nUser Question: ${userPrompt}` 
            }
          ]
        }
      ]
    });

    const replyText = response.text || 'দুঃখিত, এই মুহূর্তে উত্তর তৈরি করতে সমস্যা হচ্ছে। পরবর্তীতে আবার চেষ্টা করুন।';

    return NextResponse.json({
      success: true,
      answer: replyText
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing request' },
      { status: 500 }
    );
  }
}
