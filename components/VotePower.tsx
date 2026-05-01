"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Users } from "lucide-react";

const closeRaces = [
    { id: 1, name: "District Alpha (2019)", margin: 142, total: 124500 },
    { id: 2, name: "District Beta (2020)", margin: 89, total: 98200 },
    { id: 3, name: "District Gamma (2022)", margin: 315, total: 210000 },
];

export default function VotePower() {
    const [selectedRace, setSelectedRace] = useState(closeRaces[0]);

    return (
        <div className="w-full max-w-5xl mx-auto p-6 mt-12 bg-gray-950 border border-gray-800 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                        <AlertCircle className="text-red-500" />
                        Does One Vote Matter?
                    </h2>
                    <p className="text-gray-400 mt-2">See how close recent elections actually were.</p>
                </div>

                <select
                    className="mt-4 md:mt-0 bg-black border border-gray-700 text-white p-3 rounded-lg outline-none focus:border-blue-500 transition-colors"
                    onChange={(e) => setSelectedRace(closeRaces.find(r => r.id === parseInt(e.target.value)) || closeRaces[0])}
                >
                    {closeRaces.map((race) => (
                        <option key={race.id} value={race.id}>{race.name}</option>
                    ))}
                </select>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedRace.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-black p-8 rounded-xl border border-gray-800 text-center"
                >
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <Users className="w-12 h-12 text-blue-500" />
                    </div>
                    <h3 className="text-5xl font-extrabold text-white mb-2">
                        Won by {selectedRace.margin} votes.
                    </h3>
                    <p className="text-gray-400 text-lg mb-8">
                        Out of {selectedRace.total.toLocaleString("en-IN")} total votes cast.
                    </p>

                    {/* Visual Bar */}
                    <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden relative">
                        <div className="absolute left-0 top-0 h-full bg-blue-500 w-[50%]"></div>
                        <div className="absolute right-0 top-0 h-full bg-red-500 w-[50%]"></div>
                        {/* The "Margin" sliver in the middle */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full bg-white w-1 z-10 shadow-[0_0_10px_white]"></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 uppercase tracking-widest">
                        The white line is the margin. Your vote flips the scale.
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}