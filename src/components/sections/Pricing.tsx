import { Check } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
  badge?: string
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'For individuals and small teams getting started with AI meeting documentation.',
    features: [
      'Up to 5 meetings per month',
      'AI transcription & meeting summaries',
      'Basic action item extraction',
      'Export to PDF',
      'Email support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Plus',
    price: '€20',
    period: 'per seat / month',
    description: 'For growing product teams that need full artifact generation and collaboration.',
    features: [
      'Unlimited meetings',
      'Full AI artifact generation',
      'User stories & acceptance criteria',
      'Decision and action tracking',
      'Jira & Confluence integration',
      'Human review workflow',
      'Team workspace (up to 10 seats)',
      'Priority email support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Pro',
    price: '€45',
    period: 'per seat / month',
    description: 'For enterprises that need advanced governance, custom workflows, and full control.',
    features: [
      'Everything in Plus',
      'Custom artifact templates',
      'Role-based access control',
      'Advanced audit trail',
      'SSO / SAML authentication',
      'SLA and uptime guarantee',
      'Custom data retention policies',
      'Unlimited seats',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-slate-50" aria-labelledby="pricing-heading">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Pricing</p>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600">
            Start free and scale as your team grows. No hidden fees, no complex tiers—just straightforward value.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                'rounded-2xl border p-7 flex flex-col transition-all duration-200 ' +
                (tier.highlighted
                  ? 'bg-blue-600 border-blue-600 shadow-xl text-white lg:-mt-4'
                  : 'bg-white border-slate-200 shadow-sm')
              }
            >
              {tier.badge && (
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 bg-white/20 text-white rounded-full font-semibold">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={'text-lg font-bold mb-1 ' + (tier.highlighted ? 'text-white' : 'text-slate-900')}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className={'text-4xl font-bold tracking-tight ' + (tier.highlighted ? 'text-white' : 'text-slate-900')}>
                    {tier.price}
                  </span>
                  <span className={'text-sm ' + (tier.highlighted ? 'text-blue-200' : 'text-slate-400')}>
                    {tier.period}
                  </span>
                </div>
                <p className={'text-sm leading-relaxed ' + (tier.highlighted ? 'text-blue-100' : 'text-slate-500')}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1" role="list">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={'flex-shrink-0 mt-0.5 ' + (tier.highlighted ? 'text-blue-200' : 'text-emerald-500')}
                    />
                    <span className={'text-sm ' + (tier.highlighted ? 'text-blue-100' : 'text-slate-600')}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          All paid plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  )
}
