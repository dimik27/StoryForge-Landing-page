import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'

const HUBSPOT_DEMO_URL = 'https://meetings.hubspot.com/dimitrina-karadzhova/storyforge'

const navLinks = [
  { label: 'Product', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClass = scrolled
    ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
    : 'bg-transparent'

  return (
    <header className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + headerClass}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5" aria-label="StoryForge home">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 5h12M3 8h9M3 11h10M3 14h7" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-semibold text-slate-900 text-sm tracking-tight">StoryForge</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={HUBSPOT_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="sm">Book a Demo</Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white py-4">
            <ul className="space-y-1 mb-4" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 px-4">
              <a href={HUBSPOT_DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="w-full justify-center">Book a Demo</Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
