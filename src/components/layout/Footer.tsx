import { Linkedin, Github, Instagram, Facebook } from 'lucide-react'

const footerLinks: Record<string, string[]> = {
  Product: ['Features', 'How it Works', 'Integrations', 'Pricing', 'Changelog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
}

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 5h12M3 8h9M3 11h10M3 14h7" stroke="white" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-semibold text-white text-sm">StoryForge</span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-[240px]">
              Turn meetings into ready backlog items with AI-powered agile artifact generation.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-md bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">&copy; 2026 StoryForge, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
