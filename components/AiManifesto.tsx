"use client";

import { useState } from "react";
import { Bot, Loader2 } from "lucide-react";

export default function AiManifesto() {
    const [party, setParty] = useState("");
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    const getSummary = async () => {
        if (!party) return;
        setLoading(true);
        try {
            const res = await fetch("/api/manifesto", {
                method: "POST",
                body: JSON.stringify({ party }),
            });
            const data = await res.json();
            setSummary(data.summary);
        } catch (error) {
            setSummary("Error generating summary. Try again.");
        }
        setLoading(false);
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-6 mt-12 bg-gray-950 border border-blue-900 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2 mb-2">
                <Bot className="text-blue-500" /> TL;DR Manifesto AI
            </h2>
            <p className="text-gray-400 mb-6">Nobody reads 50-page PDFs. Get a 3-point summary instantly.</p>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                    type="text"
                    value={party}
                    onChange={(e) => setParty(e.target.value)}
                    className="bg-black border border-gray-700 text-white p-3 rounded-lg flex-1 outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter a party or candidate name..."
                />
                <button
                    onClick={getSummary}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-colors disabled:opacity-50 flex justify-center items-center"
                >
                    {loading ? <Loader2 className="animate-spin" /> : "Generate Summary"}
                </button>
            </div>

            {summary && (
                <div className="bg-black p-6 rounded-xl border border-gray-800 text-gray-200 whitespace-pre-wrap leading-relaxed">
                    {summary}
                </div>
            )}
        </div>
    );
}