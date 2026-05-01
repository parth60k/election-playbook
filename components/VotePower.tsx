"use client";

import Image from 'next/image';

export default function VotePower() {
    return (
        <div className="relative p-2 w-full max-w-4xl mx-auto rounded-2xl">

            {/* Container with extra polish to match the cyber-theme */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.15)] group">

                {/* The updated 2019-2025 infographic */}
                <Image
                    src="image_0.png"
                    alt="Infographic chart showing extremely close election results from 2019 to 2025, titled: THE POWER OF ONE VOTE."
                    width={1920}
                    height={1080}
                    quality={100}
                    priority
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Ambient glow override to ensure perfect dark-mode blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-40 pointer-events-none"></div>
            </div>

            {/* Sub-text for context */}
            <p className="text-xs text-slate-500 mt-4 text-center px-4 font-light leading-relaxed">
                Visualization of real-world local election margins (illustrative data points). These narrow gaps demonstrate why individual participation is critical for a functioning democracy.
            </p>
        </div>
    );
}