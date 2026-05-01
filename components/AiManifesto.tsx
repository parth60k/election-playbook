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
        <div className="flex flex-col h-full">
            <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">TL;DR Manifesto AI</h3>
                <textarea
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-slate-300 text-sm mb-4 h-32 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder="Paste manifesto text here..."
                />
            </div>
            {/* This container ensures the button stays perfectly within the box */}
            <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]">
                    Generate Summary
                </button>
            </div>
        </div>
    );
}