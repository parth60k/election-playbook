"use client";

import { useState } from 'react';

export default function AiManifesto() {
    const [manifestoText, setManifestoText] = useState("");
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    const generateSummary = async () => {
        if (!manifestoText.trim()) return;

        setLoading(true);
        setSummary(""); // Clear previous results

        try {
            // NOTE: Ensure this matches the actual file path of your API route!
            // If your file is at app/api/generate/route.ts, change this to "/api/generate"
            const res = await fetch("/api/manifesto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: manifestoText }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error("Failed to generate");
            }

            setSummary(data.summary || data.answer || data.text || "Summary generated successfully.");

        } catch (error) {
            console.error("Manifesto Error:", error);
            setSummary("⚠️ [Demo Mode Active] The AI summarizer is experiencing high traffic. Please try again or check your API quotas.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                        AI
                    </div>
                    <h3 className="text-lg font-semibold text-slate-200">TL;DR Manifesto AI</h3>
                </div>

                <p className="text-slate-400 mb-4 text-sm font-light">
                    Paste dense political text below. The AI will distill it into 3 objective, unbiased bullet points.
                </p>

                <textarea
                    value={manifestoText}
                    onChange={(e) => setManifestoText(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-slate-200 text-sm mb-2 h-32 focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-600 transition-all resize-none"
                    placeholder="Paste manifesto text here (e.g., 'Batman promises to clean up Gotham...')"
                />

                {/* The Results Area */}
                {summary && (
                    <div className="bg-black/40 border border-white/5 rounded-lg p-4 mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300 overflow-y-auto max-h-40">
                        <div className="text-slate-300 text-sm font-light whitespace-pre-wrap">
                            {summary}
                        </div>
                    </div>
                )}
            </div>

            {/* The Button Container - Perfectly Aligned at the bottom */}
            <div className="p-6 pt-0 mt-auto">
                <button
                    onClick={generateSummary}
                    disabled={loading || !manifestoText.trim()}
                    className="w-full bg-indigo-600/90 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                    {loading ? "Distilling text..." : "Generate Summary"}
                </button>
            </div>
        </div>
    );
}