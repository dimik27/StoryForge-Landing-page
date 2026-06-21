import { CalendarCheck } from 'lucide-react'

export function FinalCTA() {
  return (
    <section
      className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Your next meeting should end with a ready backlog—not more notes
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join product teams that have stopped rewriting meetings into tickets and started shipping faster. Set up takes under 5 minutes.
          </p>

          <div className="flex justify-center">
            <a
              href="https://meetings.hubspot.com/dimitrina-karadzhova/storyforge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-white text-blue-700 rounded-lg text-base font-semibold hover:bg-blue-50 transition-colors shadow-sm"
            >
              <CalendarCheck size={17} />
              Book a Demo
            </a>
          </div>

          <p className="text-sm text-blue-200 mt-6">
            No credit card required &middot; Free plan available &middot; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
