"use client";

export default function VotePower() {
    // Illustrative data of incredibly close real-world style local elections
    const electionData = [
        { year: 2019, race: "City Council District 4", margin: 5, winner: 50.1, color: "from-blue-500 to-cyan-400" },
        { year: 2020, race: "Regional School Board", margin: 12, winner: 50.3, color: "from-indigo-500 to-purple-400" },
        { year: 2021, race: "Township Mayor", margin: 3, winner: 50.05, color: "from-emerald-500 to-teal-400" },
        { year: 2022, race: "State Representative", margin: 24, winner: 50.8, color: "from-amber-500 to-orange-400" },
        { year: 2023, race: "County Commissioner", margin: 8, winner: 50.2, color: "from-pink-500 to-rose-400" },
        { year: 2024, race: "District Attorney", margin: 15, winner: 50.4, color: "from-violet-500 to-fuchsia-400" },
        { year: 2025, race: "City Comptroller", margin: 2, winner: 50.02, color: "from-cyan-500 to-blue-400" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="mb-6">
                <h3 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-2">The Power of One Vote</h3>
                <p className="text-slate-400 text-sm font-light">
                    Think your vote doesn't matter? Here is the razor-thin margin of victory in local elections from 2019 to 2025. In local politics, a handful of people decide the outcome for thousands.
                </p>
            </div>

            <div className="space-y-5 relative">
                {/* Subtle grid line behind the bars */}
                <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white/10 z-0"></div>

                {electionData.map((data) => (
                    <div key={data.year} className="relative z-10 group">
                        <div className="flex justify-between text-xs mb-1.5">
                            <span className="font-medium text-slate-300 flex gap-2 items-center">
                                <span className="text-white/50">{data.year}</span>
                                {data.race}
                            </span>
                            <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/5 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors">
                                Won by {data.margin} votes
                            </span>
                        </div>

                        {/* The Bar Chart Container */}
                        <div className="h-4 w-full bg-black/50 rounded-full overflow-hidden flex border border-white/5">
                            {/* Winner Bar */}
                            <div
                                className={`h-full bg-gradient-to-r ${data.color} relative overflow-hidden`}
                                style={{ width: `${data.winner}%` }}
                            >
                                {/* Shine effect on the bar */}
                                <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] -translate-x-full"></div>
                            </div>
                            {/* Loser Bar */}
                            <div
                                className="h-full bg-slate-800"
                                style={{ width: `${100 - data.winner}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between text-xs text-slate-500">
                <span>*Illustrative data representing average local election margins</span>
                <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div> Winner
                    <div className="w-2 h-2 rounded-full bg-slate-800 ml-2 border border-white/10"></div> Runner-up
                </span>
            </div>
        </div>
    );
}