import { useState, useEffect, useRef } from 'react'
import { X, Sparkles, BookOpen, Zap, ArrowRight } from 'lucide-react'

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: { portalId: string; formId: string; region: string; target: string }) => void
      }
    }
  }
}

const perks = [
  { icon: Sparkles, text: 'Early access to new AI features' },
  { icon: BookOpen, text: 'Agile best practices & playbooks' },
  { icon: Zap, text: 'Product updates before anyone else' },
]

function NewsletterModal({ onClose }: { onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  // Mount HubSpot form once modal is open
  useEffect(() => {
    if (initialized.current) return

    const mount = () => {
      if (window.hbspt && containerRef.current) {
        initialized.current = true
        window.hbspt.forms.create({
          portalId: '19914554',
          formId: '43e1734c-d2dd-43d7-a08e-919f96442e35',
          region: 'na1',
          target: '#hs-newsletter-popup',
        })
      }
    }

    if (window.hbspt) {
      mount()
    } else {
      const interval = setInterval(() => {
        if (window.hbspt) { clearInterval(interval); mount() }
      }, 100)
      return () => clearInterval(interval)
    }
  }, [])

  // Escape key + body scroll lock
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Subscribe to newsletter">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 5h12M3 8h9M3 11h10M3 14h7" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-semibold text-slate-900 text-sm">Subscribe to StoryForge</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* HubSpot form */}
        <div className="px-6 py-6">
          <p className="text-sm text-slate-500 mb-5">
            Get product updates, agile best practices, and early access to new StoryForge features — sent every two weeks.
          </p>
          <div id="hs-newsletter-popup" ref={containerRef} className="hs-form-container" />
        </div>
      </div>
    </div>
  )
}

export function Newsletter() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <NewsletterModal onClose={() => setOpen(false)} />}

      <section className="section-padding bg-slate-50 border-t border-slate-200" aria-labelledby="newsletter-heading">
        <div className="container-width">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: copy */}
              <div className="px-8 py-10 sm:px-12 sm:py-12">
                <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">Newsletter</p>
                <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Stay ahead of the backlog
                </h2>
                <p className="text-blue-100 leading-relaxed mb-8">
                  Join 2,000+ product managers and engineers who read the StoryForge newsletter. No filler—only actionable insights on agile delivery and AI tooling.
                </p>

                <ul className="space-y-3 mb-8">
                  {perks.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-blue-200" />
                      </div>
                      <span className="text-sm text-blue-100">{text}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-blue-300">
                  Sent every two weeks. Unsubscribe anytime.
                </p>
              </div>

              {/* Right: subscribe prompt */}
              <div className="bg-white/[0.06] px-8 py-10 sm:px-12 sm:py-12 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-white mb-2">Subscribe for free</h3>
                <p className="text-sm text-blue-200 mb-8">
                  One click. No spam. Unsubscribe anytime.
                </p>
                <button
                  onClick={() => setOpen(true)}
                  className="w-full h-11 bg-white text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight size={15} />
                </button>
                <p className="text-xs text-blue-300/70 mt-4 text-center">
                  No spam. One-click unsubscribe. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
