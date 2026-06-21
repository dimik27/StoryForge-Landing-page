import { ArrowRight, CheckCircle2, AlertCircle, Clock, UserCheck, ChevronRight } from 'lucide-react'

const painPoints = [
  {
    n: '01',
    headline: 'Hours lost rewriting meetings into tickets',
    body: 'Every sprint, product teams spend hours translating discussion into Jira—work that adds no new thinking, only transcription.',
  },
  {
    n: '02',
    headline: 'Context disappears between conversation and delivery',
    body: 'The nuance, the reasoning, the edge cases—they stay in the meeting room. Engineers build against a flattened version of what was decided.',
  },
  {
    n: '03',
    headline: 'Ambiguity creates rework nobody planned for',
    body: 'When requirements are incomplete, teams build the wrong thing. Rework eats the sprint. The next meeting is scheduled to fix what the last one should have prevented.',
  },
]

function ProblemVisual() {
  const decisions = [
    {
      id: 'DEC-12',
      text: 'API pagination defaults to 50 items per page',
      owner: 'Maya',
      status: 'confirmed',
      source: '14:32',
    },
    {
      id: 'DEC-13',
      text: 'Mobile app targets iOS 16+ and Android 12+',
      owner: 'Liam',
      status: 'confirmed',
      source: '21:07',
    },
    {
      id: 'DEC-14',
      text: 'Deprecate v1 endpoints after 90-day migration window',
      owner: 'TBD',
      status: 'open',
      source: '33:41',
    },
  ]

  const actions = [
    { id: 'A-07', task: 'Create API migration guide for v1 → v2', owner: 'Liam', due: 'Fri', done: false },
    { id: 'A-08', task: 'Update mobile OS requirements in README', owner: 'Maya', due: 'Thu', done: true },
    { id: 'A-09', task: 'Confirm 90-day window with legal & comms', owner: 'Ana', due: 'Mon', done: false },
  ]

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-[11px] text-slate-400 ml-2 font-medium">Backend Review · Jun 4 · 41 min</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full font-medium">Processed</span>
      </div>

      {/* Decisions table */}
      <div className="border-b border-slate-100">
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-100">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Decisions captured</span>
          <span className="text-[10px] text-slate-400">3 of 3 logged</span>
        </div>
        <div className="divide-y divide-slate-50">
          {decisions.map(({ id, text, owner, status, source }) => (
            <div key={id} className="px-4 py-3 flex items-start gap-3 hover:bg-slate-50/50 transition-colors">
              <div className="flex-shrink-0 mt-0.5">
                {status === 'confirmed'
                  ? <CheckCircle2 size={13} className="text-emerald-500" />
                  : <AlertCircle size={13} className="text-amber-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-700 leading-snug">{text}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-mono text-slate-400">{id}</span>
                  <span className="text-[10px] text-slate-400">Owner: <span className="font-medium text-slate-600">{owner}</span></span>
                </div>
              </div>
              <button className="flex-shrink-0 text-[10px] text-slate-400 hover:text-blue-600 flex items-center gap-0.5 transition-colors">
                <Clock size={9} />
                <span>{source}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Action items */}
      <div>
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-100">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Action items assigned</span>
          <span className="text-[10px] text-slate-400">1 of 3 done</span>
        </div>
        <div className="divide-y divide-slate-50">
          {actions.map(({ id, task, owner, due, done }) => (
            <div key={id} className={`px-4 py-3 flex items-center gap-3 ${done ? 'opacity-50' : ''}`}>
              <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}>
                {done && <CheckCircle2 size={10} className="text-white" />}
              </div>
              <p className={`text-xs flex-1 ${done ? 'line-through text-slate-400' : 'text-slate-700'}`}>{task}</p>
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserCheck size={8} className="text-blue-600" />
                  </div>
                  <span className="text-[10px] font-medium text-slate-600">{owner}</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${due === 'Mon' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>{due}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">Auto-linked to Jira · Confluence page created</span>
        <button className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
          View full log <ChevronRight size={11} />
        </button>
      </div>
    </div>
  )
}

export function Problem() {
  return (
    <section id="problem" className="section-padding bg-slate-50" aria-labelledby="problem-heading">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: heading + numbered pain points */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">The problem</p>
            <h2 id="problem-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-14">
              Meetings create alignment.<br />Documentation creates drag.
            </h2>

            <div className="space-y-10">
              {painPoints.map(({ n, headline, body }) => (
                <div key={n} className="flex gap-6">
                  <span className="text-5xl font-black text-slate-200 leading-none flex-shrink-0 w-12 text-right select-none">
                    {n}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{headline}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              See how StoryForge solves this
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right: product mockup */}
          <div className="lg:sticky lg:top-28">
            <ProblemVisual />
          </div>

        </div>
      </div>
    </section>
  )
}
