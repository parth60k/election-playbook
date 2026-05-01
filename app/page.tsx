import ElectionTimeline from "../components/ElectionTimeline";
import AiManifesto from "../components/AiManifesto";
import VotePower from "../components/VotePower";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          The Election <span className="text-blue-500">Playbook</span>
        </h1>
        <p className="text-xl text-gray-400">
          A step-by-step breakdown of how democracy scales.
        </p>
      </div>

      <ElectionTimeline />

      {/* Add the new component here */}
      <VotePower />
      <AiManifesto />
    </main>
  );
}
