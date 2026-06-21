import { Zap, CheckCircle2 } from 'lucide-react'

const integrations = [
  {
    name: 'Microsoft Teams',
    description: 'Auto-capture meetings and transcripts directly from your Teams channels and calls. No bots to install—just connect and StoryForge handles the rest.',
    color: 'bg-indigo-600',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-100',
    initial: 'T',
    benefits: ['Auto-joins scheduled meetings', 'Captures audio & chat', 'Syncs with calendar'],
  },
  {
    name: 'Jira',
    description: 'Push approved backlog items and user stories to any Jira project with a single click. Field mapping, epic linking, and story points all supported.',
    color: 'bg-blue-700',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-100',
    initial: 'J',
    benefits: ['One-click story creation', 'Epic & sprint linking', 'Custom field mapping'],
  },
  {
    name: 'Confluence',
    description: 'Publish polished meeting summaries, decision logs, and documentation pages directly to your Confluence spaces—automatically formatted and linked.',
    color: 'bg-blue-600',
    lightColor: 'bg-sky-50',
    textColor: 'text-sky-700',
    borderColor: 'border-sky-100',
    initial: 'C',
    benefits: ['Auto-creates meeting pages', 'Links to Jira tickets', 'Decision log templates'],
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="section-padding bg-white" aria-labelledby="integrations-heading">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Integrations</p>
          <h2 id="integrations-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Works with the tools your team already uses
          </h2>
          <p className="text-lg text-slate-600">
            StoryForge fits into your existing workflow without disruption. Connect once, and every meeting starts flowing into your backlog automatically.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {integrations.map(({ name, description, color, lightColor, textColor, borderColor, initial, benefits }) => (
            <div
              key={name}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Card header */}
              <div className={`${lightColor} border-b ${borderColor} px-5 py-4 flex items-center gap-3`}>
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                  <span className="text-white font-bold text-base">{initial}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{name}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Zap size={10} className={textColor} />
                    <span className={`text-xs font-medium ${textColor}`}>Connected</span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-5 py-4 flex-1 flex flex-col">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
                <ul className="space-y-2 mt-auto">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-xs text-slate-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500">More integrations coming soon — Zoom, Microsoft Teams (extended), Google Meet, and GitHub</p>
        </div>
      </div>
    </section>
  )
}
