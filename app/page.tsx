import ElectionTimeline from '@/components/ElectionTimeline';
import AiManifesto from '@/components/AiManifesto';
import VoterAssistant from '@/components/VoterAssistant';
import VotePower from '@/components/VotePower';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500/30">

      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent blur-[100px] rounded-full"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-5xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.1)]">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Live AI Prototype
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 mb-6 pb-2">
          The Election Playbook
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
          Demystifying the democratic process with interactive data and AI-driven insights.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              Election Lifecycle
            </h2>
            <ElectionTimeline />
          </section>

          <section className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              Margin of Victory Data
            </h2>
            <VotePower />
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          <section className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-6 hover:border-white/20 transition-colors">
            <AiManifesto />
          </section>

          <section className="bg-indigo-950/20 backdrop-blur-xl border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.05)] rounded-2xl p-0 hover:border-indigo-500/40 transition-colors">
            <VoterAssistant />
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
        <p>Built for the Prompt Wars Hackathon.</p>
      </footer>

    </main>
  );
}
