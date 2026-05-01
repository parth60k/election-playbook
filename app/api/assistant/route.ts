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

        if (!response.ok) {
            throw new Error(data.error?.message || "Google API Error");
        }

        const answerText = data.candidates[0].content.parts[0].text;
        return NextResponse.json({ answer: answerText });

    } catch (error: any) {
        console.error("Assistant Error:", error);
        return NextResponse.json(
            { answer: "I'm currently experiencing high traffic. Please try asking your question again in a moment." },
            { status: 500 }
        );
    }
}