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
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 w-full max-w-2xl mx-auto my-8">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    AI
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Voter Assistant</h3>
            </div>

            <p className="text-slate-500 mb-4 text-sm">
                Have a question about the voting process, registration, or election rules? Ask our neutral AI assistant.
            </p>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && askAssistant()}
                    placeholder="e.g., What ID do I need to bring to the polling booth?"
                    className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <button
                    onClick={askAssistant}
                    disabled={loading}
                    className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition disabled:opacity-50"
                >
                    {loading ? "Thinking..." : "Ask"}
                </button>
            </div>

            {answer && (
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-slate-800 leading-relaxed text-sm">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
}