import { Mic2, LayoutList, BookOpen, ListChecks, UserCheck, Puzzle, Search, Link2 } from 'lucide-react'

const features = [
  {
    icon: Mic2,
    title: 'AI Transcription',
    description: 'High-accuracy speech-to-text converts meeting audio into a searchable, structured transcript automatically.',
    tag: 'Core',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    icon: LayoutList,
    title: 'Backlog Item Generation',
    description: 'Automatically extract discrete backlog items from conversation threads, each with a title, description, and priority signal.',
    tag: 'Core',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    icon: BookOpen,
    title: 'User Stories & Acceptance Criteria',
    description: 'Generate structured user stories in standard agile format, complete with acceptance criteria derived from stated requirements.',
    tag: 'Core',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    icon: ListChecks,
    title: 'Decision & Action Tracking',
    description: 'Capture every decision made and every action assigned during a meeting. Know who owns what and why it was decided.',
    tag: 'Core',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    icon: UserCheck,
    title: 'Human Review Before Publishing',
    description: 'All generated artifacts are reviewed by your team before being published. You control what enters your backlog.',
    tag: 'Governance',
    tagColor: 'bg-purple-50 text-purple-700',
  },
  {
    icon: Puzzle,
    title: 'Jira & Confluence Integration',
    description: 'Push approved backlog items and documentation directly to your existing Jira projects or Confluence spaces with one click.',
    tag: 'Integration',
    tagColor: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: Search,
    title: 'Searchable Meeting Intelligence',
    description: 'Search across all past meeting transcripts, decisions, and artifacts to find context for any discussion or requirement.',
    tag: 'Intelligence',
    tagColor: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Link2,
    title: 'Full Traceability',
    description: 'Every artifact is linked back to the exact moment in the meeting transcript that generated it. Understand the why behind every ticket.',
    tag: 'Governance',
    tagColor: 'bg-purple-50 text-purple-700',
  },
]

export function Features() {
  return (
    <section id="features" className="section-padding bg-white" aria-labelledby="features-heading">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Features</p>
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Everything your team needs to close the meeting-to-delivery gap
          </h2>
          <p className="text-lg text-slate-600">
            StoryForge handles the full documentation workflow—from raw conversation to ready artifacts—without adding process overhead.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description, tag, tagColor }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center mb-4 transition-colors">
                <Icon size={18} className="text-slate-600 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{description}</p>
              <span className={'text-xs px-2.5 py-1 rounded-md font-medium self-start ' + tagColor}>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
