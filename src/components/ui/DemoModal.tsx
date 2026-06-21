import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useDemoModal } from '../../context/DemoModalContext'

export function DemoModal() {
  const { isOpen, closeModal } = useDemoModal()

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, closeModal])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book a Demo"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 5h12M3 8h9M3 11h10M3 14h7" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-semibold text-slate-900 text-sm">Book a Demo · StoryForge</span>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* HubSpot Meetings embed */}
        <div
          className="meetings-iframe-container"
          data-src="https://meetings.hubspot.com/dimitrina-karadzhova/storyforge?embed=true"
          style={{ minHeight: 680 }}
        />
      </div>
    </div>
  )
}
