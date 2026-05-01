import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { party } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        // 1. Hard check to see if your app is actually reading the file
        if (!apiKey || apiKey.includes("your_actual_api_key_here")) {
            return NextResponse.json({
                summary: "⚠️ ERROR: Your Next.js app cannot see the API key. Make sure your .env.local file is saved and you restarted the terminal."
            });
        }

        // 2. Direct raw fetch to Google's servers (Bypassing the SDK completely)
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a neutral political analyst. Summarize the core promises of the ${party} in a strict, punchy 3-bullet-point list. Keep it very short.`
                    }]
                }]
            })
        });

        const data = await response.json();

        // 3. Catch specific Google errors directly
        if (!response.ok) {
            console.error("🚨 Raw Google API Error:", data);
            return NextResponse.json({
                summary: `⚠️ API Error: ${data.error?.message || 'Check your terminal for details.'}`
            });
        }

        // 4. Send the text back to the frontend
        const summaryText = data.candidates[0].content.parts[0].text;
        return NextResponse.json({ summary: summaryText });

    } catch (error: any) {
        console.error("🚨 Server Crash:", error);
        return NextResponse.json(
            { error: 'Failed to fetch summary.' },
            { status: 500 }
        );
    }
}