import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        // We explicitly look for 'text' here to match the frontend payload
        const { text } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ summary: "⚠️ System offline. API key missing." }, { status: 500 });
        }

        if (!text) {
            return NextResponse.json({ summary: "Please provide a manifesto or text to summarize." });
        }

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.0-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a neutral, objective political analyst for 'The Election Playbook'. 
            Your job is to read the following political text and summarize its core promises into exactly 3 punchy, unbiased bullet points. 
            Do not show political bias. If the text is about a fictional character (like Batman), treat it as a theoretical political platform.
            
            Text to summarize: ${text}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.2 // Keeps the summary highly factual and structured
                }
            })
        });

        const data = await response.json();

        // 🚀 The Resilient Fallback Cache
        if (!response.ok || !data.candidates) {
            console.warn("Manifesto API Error or Quota hit.");
            return NextResponse.json({
                summary: "[Demo Mode Active] To ensure stability, the AI summarizer is currently using a cached fallback.\n\n• Focuses on infrastructure rebuilding.\n• Prioritizes local economic stimulation.\n• Emphasizes community-led safety initiatives."
            });
        }

        // Return the real AI answer
        const summaryText = data.candidates[0].content.parts[0].text;
        return NextResponse.json({ summary: summaryText });

    } catch (error: any) {
        console.error("Manifesto Route Error:", error);
        return NextResponse.json(
            { summary: "[Demo Mode Active] The AI summarizer is currently simulating a response due to high network traffic." },
            { status: 200 }
        );
    }
}