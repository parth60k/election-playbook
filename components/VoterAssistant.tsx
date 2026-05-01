"use client";

import { useState } from 'react';

export default function VoterAssistant() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askAssistant = async () => {
        if (!question.trim()) return;

        setLoading(true);
        setAnswer(""); // Clear previous answer

        try {
            const res = await fetch("/api/assistant", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question }),
            });
            const data = await res.json();
            setAnswer(data.answer);
        } catch (error) {
            setAnswer("Something went wrong connecting to the assistant.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 w-full max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    AI
                </div>
                <h3 className="text-lg font-semibold text-slate-200">Voter Assistant</h3>
            </div>

            <p className="text-slate-400 mb-5 text-sm font-light">
                Ask our neutral AI anything about the voting process, registration, or election rules.
            </p>

            <div className="flex flex-col gap-3 mb-2">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && askAssistant()}
                    placeholder="e.g., What ID do I need?"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm"
                />
                <button
                    onClick={askAssistant}
                    disabled={loading}
                    className="w-full bg-indigo-600/90 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-500 transition-all disabled:opacity-50 shadow-[0_0_15px_rgba(79,70,229,0.4)] text-sm"
                >
                    {loading ? "Decrypting answer..." : "Ask Assistant"}
                </button>
            </div>

            {answer && (
                <div className="bg-black/40 border border-white/5 rounded-lg p-4 mt-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-slate-300 leading-relaxed text-sm font-light">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}