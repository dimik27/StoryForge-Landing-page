import { ArrowRight, CheckCircle2, Mic, Sparkles, FileText, ListChecks } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

function HeroMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/10 rounded-3xl blur-2xl -z-10 scale-110" />
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 flex items-center gap-2">
              <Mic size={10} className="text-blue-400" />
              <span>Sprint Planning · Q2 Kickoff · Recording processed</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="rounded-xl bg-slate-50 border border-slate-100 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                <Mic size={10} className="text-blue-600" />
              </div>
              <span className="text-xs font-medium text-slate-500">Transcript</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <span className="font-medium text-slate-900">Sarah:</span> "...we need the user to be able to filter results by date range on the dashboard. The current view is too noisy for account managers..."
            </p>
            <p className="text-xs text-slate-500 mt-1.5">
              <span className="font-medium">Marcus:</span> "Agreed. Let&apos;s make sure the filter persists across sessions too."
            </p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                <Sparkles size={10} className="text-white" />
              </div>
              <span className="text-xs font-semibold text-blue-700">Generated User Story</span>
              <span className="ml-auto text-xs px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded font-medium">Ready</span>
            </div>
            <p className="text-xs font-medium text-slate-900">
              As an account manager, I want to filter dashboard results by date range so that I can focus on relevant data without visual noise.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2 mb-2">
              <ListChecks size={13} className="text-slate-500" />
              <span className="text-xs font-semibold text-slate-700">Acceptance Criteria</span>
            </div>
            <ul className="space-y-1.5">
              {[
                'Date range picker visible on dashboard header',
                'Filter results update in real-time on selection',
                'Filter state persists across page sessions',
                'Default to last 30 days on initial load',
              ].map((criterion) => (
                <li key={criterion} className="flex items-start gap-2">
                  <CheckCircle2 size={12} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-600">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={13} className="text-slate-500" />
              <span className="text-xs font-semibold text-slate-700">Action Items</span>
            </div>
            <ul className="space-y-1.5">
              {[
                { owner: 'Sarah', task: 'Add to sprint backlog and prioritize' },
                { owner: 'Marcus', task: 'Review UX spec for date range component' },
              ].map(({ owner, task }) => (
                <li key={task} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600 flex-shrink-0">
                    {owner[0]}
                  </div>
                  <span className="text-xs text-slate-600"><span className="font-medium">{owner}:</span> {task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 px-4 py-3 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">2 stories generated · 3 decisions captured</span>
          <button className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
            Push to Jira <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28" aria-labelledby="hero-heading">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-50/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="brand" className="mb-6 inline-flex">
              <Sparkles size={12} />
              AI-powered agile artifacts
            </Badge>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-tight mb-6"
            >
              Turn meetings into{' '}
              <span className="gradient-text">ready backlog items</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              StoryForge combines speech-to-text with AI to transform meeting recordings into backlog items, user stories, acceptance criteria, and action items—so your team spends less time documenting and more time delivering.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="https://meetings.hubspot.com/dimitrina-karadzhova/storyforge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="primary">
                  Book a Demo
                  <ArrowRight size={16} />
                </Button>
              </a>
            </div>

            <ul className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center lg:justify-start" role="list">
              {[
                'No credit card required',
                'Setup in under 5 minutes',
                'Integrates with Jira',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <HeroMockup />
        </div>
      </div>
    </section>
  )
}
