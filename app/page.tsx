import ElectionTimeline from '@/components/ElectionTimeline';
import AiManifesto from '@/components/AiManifesto';
import VoterAssistant from '@/components/VoterAssistant';
import VotePower from '@/components/VotePower';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 font-sans bg-[#0A0A0A]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 mb-6 pb-2">
          The Election Playbook
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
          Built for PromptWars: Engineering civic engagement through AI-native workflows.
        </p>
      </div>

      {/* Grid with items-stretch ensures all cards in a row have the same height */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        <div className="lg:col-span-2 flex flex-col gap-6">
          <section className="flex-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">Election Lifecycle</h2>
            <ElectionTimeline />
          </section>

          <section className="flex-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">The Power of One Vote (2019-2025)</h2>
            <VotePower />
          </section>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
          <section className="flex-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden flex flex-col">
            <AiManifesto />
          </section>

          <section className="flex-1 bg-indigo-950/20 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-0 overflow-hidden flex flex-col">
            <VoterAssistant />
          </section>
        </div>
      </div>

      <footer className="relative z-10 max-w-6xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-sm text-slate-500 pb-10">
        <p>Built using Google Antigravity & Gemini 3.0 Flash</p>
      </footer>
    </main>
  );
}
