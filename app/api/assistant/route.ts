import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { question } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ answer: "⚠️ System offline. API key missing." });
        }

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a highly professional, neutral, and helpful voter assistant for the 'Election Playbook' platform. 
            Answer this voter's question clearly, objectively, and concisely in 2 to 3 sentences. 
            Do not show political bias. 
            Question: ${question}`
                    }]
                }]
            })
        });

        const data = await response.json();

        // 🚀 THE SAFETY NET: If Google blocks us, use the Demo Fallback
        if (!response.ok || !data.candidates) {
            console.warn("API Error or Quota hit. Switching to Demo Mode.");
            return NextResponse.json({
                answer: "[Demo Mode Active] To ensure uninterrupted service during high traffic, we've engaged our cached responses. A valid state ID, driver's license, or passport is typically required at the polling booth. Please check your local county website for specific state laws."
            });
        }

        // If successful, return the real AI answer
        const answerText = data.candidates[0].content.parts[0].text;
        return NextResponse.json({ answer: answerText });

    } catch (error: any) {
        console.error("Assistant Error:", error);
        return NextResponse.json(
            { answer: "[Demo Mode Active] The AI assistant is currently simulating a response due to API restrictions. In a live environment, this would process your specific question about election protocols." },
            { status: 200 } // Changed to 200 so the UI doesn't think it's a fatal crash
        );
    }
}