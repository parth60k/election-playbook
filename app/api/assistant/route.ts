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
            If you do not know the exact, factual answer, or if the question is highly specific to a local county, you must reply: 'Election laws vary by location. I recommend checking your state's official election website for the most accurate information.' Do not guess or invent information.
            Question: ${question}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.1 // Locks down the AI to prevent hallucinations
                }
            })
        });

        const data = await response.json();

        // 🚀 THE SMART DEMO FALLBACK
        if (!response.ok || !data.candidates) {
            console.warn("API Error or Quota hit. Switching to Smart Demo Mode.");

            const lowerQ = question.toLowerCase();
            let cachedAnswer = "";

            if (lowerQ.includes("time") || lowerQ.includes("long") || lowerQ.includes("when") || lowerQ.includes("hours")) {
                cachedAnswer = "[Demo Mode Active] Polling hours vary by state, but most locations are open from 7:00 AM to 8:00 PM. Importantly, if you are already in line when the polls close, you legally have the right to vote.";
            } else if (lowerQ.includes("id") || lowerQ.includes("bring")) {
                cachedAnswer = "[Demo Mode Active] Voter ID requirements vary. A valid state ID, driver's license, or passport is typically required at the polling booth. Please check your local county website for specifics.";
            } else if (lowerQ.includes("where") || lowerQ.includes("location") || lowerQ.includes("place")) {
                cachedAnswer = "[Demo Mode Active] Your specific polling location depends on your registered home address. You can find your exact polling place on your state's official Secretary of State website.";
            } else {
                cachedAnswer = "[Demo Mode Active] To ensure uninterrupted service during high traffic, live AI responses are temporarily paused. For accurate information regarding your query, please visit your state's Board of Elections website.";
            }

            return NextResponse.json({ answer: cachedAnswer });
        }

        // If successful, return the real AI answer
        const answerText = data.candidates[0].content.parts[0].text;
        return NextResponse.json({ answer: answerText });

    } catch (error: any) {
        console.error("Assistant Error:", error);
        return NextResponse.json(
            { answer: "[Demo Mode Active] The AI assistant is currently simulating a response due to API restrictions. Please check local guidelines." },
            { status: 200 }
        );
    }
}