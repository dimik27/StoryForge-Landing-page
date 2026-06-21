import { TrendingUp, Target, Zap, MessageSquareOff, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    metric: 'Save 3–5 hours',
    per: 'per team per sprint',
    title: 'Reclaim time for delivery',
    description: 'Eliminate manual note-taking and ticket-writing after every meeting. Your team gets that time back for actual engineering and product work.',
  },
  {
    icon: Target,
    metric: 'Higher backlog quality',
    per: 'from day one',
    title: 'Clearer, more complete requirements',
    description: 'AI-generated stories include the full context from the conversation—edge cases, constraints, and decisions that would otherwise be lost.',
  },
  {
    icon: Zap,
    metric: 'Faster from meeting',
    per: 'to execution',
    title: 'Shorten the cycle to delivery',
    description: 'Approved artifacts are ready to sprint-plan with immediately. No lag between alignment and action.',
  },
  {
    icon: MessageSquareOff,
    metric: 'Fewer follow-up',
    per: 'meetings and threads',
    title: 'Reduce clarification overhead',
    description: 'When requirements are clearly documented with source context, the need for clarification threads and follow-up calls drops significantly.',
  },
  {
    icon: ShieldCheck,
    metric: 'Full traceability',
    per: 'artifact to conversation',
    title: 'Auditability and accountability',
    description: 'Every backlog item links back to the exact moment it was discussed. No ambiguity about origin, intent, or owner.',
  },
]

function BeforeAfterMockup() {
  const before = [
    { step: 'Meeting ends', time: '0h', done: true },
    { step: 'PM writes rough notes', time: '+1h', done: true },
    { step: 'Notes shared in Microsoft Teams', time: '+2h', done: true },
    { step: 'Jira tickets written manually', time: '+5h', done: true },
    { step: 'Team reviews & debates tickets', time: '+7h', done: true },
    { step: 'Backlog ready for sprint planning', time: '+9h', done: true },
  ]
  const after = [
    { step: 'Meeting ends', time: '0h', done: true },
    { step: 'StoryForge transcribes & generates', time: '+4min', done: true },
    { step: 'Team reviews in StoryForge', time: '+30min', done: true },
    { step: 'One-click push to Jira', time: '+35min', done: true },
    { step: 'Backlog ready for sprint planning', time: '+35min', done: true },
  ]

  return (
    <div className="mt-16 grid md:grid-cols-2 gap-5">
      {/* Before */}
      <div className="bg-white/[0.04] border border-white/[0.1] rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
            <Clock size={12} className="text-red-400" />
          </div>
          <span className="text-sm font-semibold text-slate-300">Before StoryForge</span>
          <span className="ml-auto text-xs px-2 py-1 bg-red-500/15 text-red-400 rounded-full font-medium">~9 hours</span>
        </div>
        <div className="space-y-3">
          {before.map(({ step, time }) => (
            <div key={step} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0" />
              <span className="text-sm text-slate-400 flex-1">{step}</span>
              <span className="text-xs font-mono text-slate-500">{time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* After */}
      <div className="bg-emerald-500/[0.06] border border-emerald-500/[0.15] rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Zap size={12} className="text-emerald-400" />
          </div>
          <span className="text-sm font-semibold text-slate-300">With StoryForge</span>
          <span className="ml-auto text-xs px-2 py-1 bg-emerald-500/15 text-emerald-400 rounded-full font-medium">~35 minutes</span>
        </div>
        <div className="space-y-3">
          {after.map(({ step, time }) => (
            <div key={step} className="flex items-center gap-3">
              <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
              <span className="text-sm text-slate-300 flex-1">{step}</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">{time}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-emerald-500/20 flex items-center gap-2">
          <ArrowRight size={14} className="text-emerald-400" />
          <span className="text-sm font-semibold text-emerald-300">94% faster from meeting to ready backlog</span>
        </div>
      </div>
    </div>
  )
}

export function Benefits() {
  return (
    <section
      id="benefits"
      className="section-padding bg-slate-950 text-white"
      aria-labelledby="benefits-heading"
    >
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Business outcomes</p>
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            The impact on your team's output is measurable
          </h2>
          <p className="text-lg text-slate-400">
            StoryForge does not just save time—it improves the quality, clarity, and speed of everything downstream.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, metric, per, title, description }) => (
            <div
              key={title}
              className="bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-6 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center mb-5">
                <Icon size={18} className="text-blue-400" />
              </div>
              <div className="mb-3">
                <span className="text-2xl font-bold text-white">{metric}</span>
                <span className="text-sm text-slate-400 ml-2">{per}</span>
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}

          <div className="bg-blue-600 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">Ready to see it?</p>
              <h3 className="text-xl font-bold text-white mb-2">
                See how StoryForge transforms your next sprint planning
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Book a 30-minute demo with our team. We will walk through your workflow and show you the impact.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://meetings.hubspot.com/dimitrina-karadzhova/storyforge"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-10 bg-white text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        <BeforeAfterMockup />
      </div>
    </section>
  )
}
