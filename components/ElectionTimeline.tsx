"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { electionPhases } from "../lib/electionData";
import { CheckCircle2, Circle } from "lucide-react";

export default function ElectionTimeline() {
    const [activeStep, setActiveStep] = useState(1);

    const currentPhase = electionPhases.find((p) => p.id === activeStep);

    return (
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto p-6">
            {/* Sidebar / Timeline */}
            <div className="flex flex-col w-full md:w-1/3 border-l-2 border-gray-800 ml-4">
                {electionPhases.map((phase) => (
                    <button
                        key={phase.id}
                        onClick={() => setActiveStep(phase.id)}
                        className={`flex items-center text-left py-4 pl-4 relative transition-colors duration-200 ${activeStep === phase.id ? "text-blue-500 font-bold" : "text-gray-400 hover:text-gray-200"
                            }`}
                    >
                        <div className="absolute -left-[13px] bg-black">
                            {activeStep === phase.id ? (
                                <CheckCircle2 className="w-6 h-6 text-blue-500 bg-black rounded-full" />
                            ) : (
                                <Circle className="w-6 h-6 text-gray-700 bg-black rounded-full" />
                            )}
                        </div>
                        {phase.title}
                    </button>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="w-full md:w-2/3 min-h-[300px]">
                <AnimatePresence mode="wait">
                    {currentPhase && (
                        <motion.div
                            key={currentPhase.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-gray-900 border border-gray-800 rounded-xl p-8"
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">{currentPhase.title}</h2>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                {currentPhase.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black p-4 rounded-lg border border-gray-800">
                                    <span className="text-sm text-gray-500 uppercase tracking-wider block mb-1">Key Actors</span>
                                    <span className="text-gray-200 font-medium">{currentPhase.actors}</span>
                                </div>
                                <div className="bg-black p-4 rounded-lg border border-gray-800">
                                    <span className="text-sm text-gray-500 uppercase tracking-wider block mb-1">Timeline</span>
                                    <span className="text-gray-200 font-medium">{currentPhase.timeline}</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}