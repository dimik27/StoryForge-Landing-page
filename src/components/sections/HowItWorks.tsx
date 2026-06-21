import { Mic, BrainCircuit, LayoutList, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Mic,
    title: 'Capture your meeting',
    description: 'Connect StoryForge to Microsoft Teams, Zoom, or upload a recording directly. Transcription begins automatically—no manual effort required.',
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: 'AI analyzes the conversation',
    description: 'Our AI models parse the transcript to identify requirements, decisions, blockers, action items, and the intent behind each discussion thread.',
  },
  {
    number: '03',
    icon: LayoutList,
    title: 'Generate structured agile artifacts',
    description: "StoryForge produces backlog items, user stories with acceptance criteria, decision logs, and action item assignments—all formatted to your team's standards.",
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Review, refine, and ship',
    description: 'Your team reviews generated artifacts in StoryForge before publishing. One click pushes approved items directly to Jira or Confluence.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="hiw-heading"
    >
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">How it works</p>
          <h2 id="hiw-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            From recording to ready backlog item in minutes
          </h2>
          <p className="text-lg text-slate-600">
            Four simple steps replace hours of manual documentation work. Your meeting becomes your backlog.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col"
            >
              {/* Step number beside icon, dark and visible */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <span className="text-3xl font-black text-slate-300 leading-none select-none tabular-nums">
                  {number}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
