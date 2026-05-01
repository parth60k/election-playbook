import ElectionTimeline from '@/components/ElectionTimeline';
import AiManifesto from '@/components/AiManifesto';
import VoterAssistant from '@/components/VoterAssistant';
import VotePower from '@/components/VotePower';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-slate-200">

      {/* Header Section */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-4 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Prototype
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          The Election Playbook
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Demystifying the democratic process with interactive data and AI-driven insights.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Timeline & Vote Power (Takes up 2/3 width on desktop) */}
        <div className="lg:col-span-2 space-y-8">

          {/* Timeline Card */}
          <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              Election Lifecycle
            </h2>
            <ElectionTimeline />
          </section>

          {/* Vote Power Visualizer Card */}
          <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Margin of Victory Data
            </h2>
            <VotePower />
          </section>

        </div>

        {/* Right Column: AI Tools (Takes up 1/3 width on desktop) */}
        <div className="lg:col-span-1 space-y-8">

          {/* AI Manifesto Summarizer */}
          <section className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
            <AiManifesto />
          </section>

          {/* AI Voter Assistant */}
          <section>
            <VoterAssistant />
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
        <p>Built for the Prompt Wars Hackathon.</p>
      </footer>

    </main>
  );
}
