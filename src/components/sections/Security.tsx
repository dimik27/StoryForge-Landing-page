import { ShieldCheck, Lock, Users, GitBranch, Eye, FileCheck } from 'lucide-react'

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade data handling',
    description: "Meeting data is encrypted in transit and at rest. Tenant isolation ensures your organization's data is never commingled with others.",
  },
  {
    icon: Eye,
    title: 'Human-in-the-loop review',
    description: 'No artifact is published to your backlog without human review and approval. StoryForge generates; your team decides.',
  },
  {
    icon: Lock,
    title: 'Controlled publishing workflow',
    description: 'Defined approval flows ensure that only reviewed, authorized artifacts reach your project management tools.',
  },
  {
    icon: Users,
    title: 'Role-based access control',
    description: 'Granular permissions control who can view transcripts, review artifacts, approve items, and push to integrations.',
  },
  {
    icon: GitBranch,
    title: 'Full audit trail',
    description: 'Every action—from transcript processing to artifact approval—is logged with a timestamp and user attribution.',
  },
  {
    icon: FileCheck,
    title: 'Artifact-to-source traceability',
    description: 'Every backlog item is permanently linked to the conversation moment that generated it, supporting requirements traceability.',
  },
]

export function Security() {
  return (
    <section id="security" className="section-padding bg-slate-50" aria-labelledby="security-heading">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Security &amp; governance</p>
            <h2 id="security-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Enterprise-ready by design
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Meeting recordings contain sensitive strategic information. StoryForge is built with the controls and transparency that enterprise security and compliance teams expect.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              From granular access controls to a complete audit trail, every aspect of how data flows through StoryForge is visible, configurable, and under your control.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3 text-sm">Data handling principles</h3>
              <ul className="space-y-2.5" role="list">
                {[
                  'Data encrypted in transit (TLS 1.3) and at rest (AES-256)',
                  "No model training on your organization's data",
                  'Configurable data retention policies',
                  'Single-tenant deployment available for enterprise',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {trustItems.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <Icon size={16} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1.5">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
