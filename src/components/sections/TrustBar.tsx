
const logos = [
  {
    name: 'Accedia',
    src: 'https://accedia.com/logo-white.svg',
    // white SVG — brightness(0) filter in .logo-img turns it dark
  },
  {
    name: 'Paysafe',
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Paysafe_Logo.svg',
  },
  {
    name: 'zigiwave',
    src: 'https://www.zigiwave.com/img-proxy/653fdcaf2a73449c36547dac/653fe3028291b72b325edc80_zigi-wave-logo--white.svg',
    // white SVG — brightness(0) filter turns it dark
  },
  {
    name: 'ICT Strypes',
    src: 'https://ict-strypes.eu/wp-content/uploads/2021/07/ICT-Strypes_Payoff_RGB-e1722505563793-1024x397.png',
  },
]

const metrics = [
  {
    value: '4.2h',
    label: 'saved per meeting',
    context: 'per team on average',
  },
  {
    value: '10k+',
    label: 'meetings processed',
    context: 'across all customers',
  },
  {
    value: '48k+',
    label: 'artifacts generated',
    context: 'stories, ACs, action items',
  },
]

export function TrustBar() {
  return (
    <div aria-label="Social proof">
      {/* ── Logo strip — white bg, real logos normalised via CSS filter ── */}
      <div className="bg-white border-b border-slate-100 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-medium text-slate-400 tracking-[0.2em] uppercase mb-12">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            {logos.map(({ src, name }) => (
              <img
                key={name}
                src={src}
                alt={name}
                title={name}
                className="logo-img h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats band — dark background, numbers separated by vertical dividers ── */}
      <div className="bg-slate-900 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
            {metrics.map(({ value, label, context }) => (
              <div key={label} className="flex flex-col items-center text-center py-6 sm:py-0 sm:px-10 first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0">
                <span className="text-5xl font-black text-white tracking-tight leading-none mb-2">
                  {value}
                </span>
                <span className="text-sm font-semibold text-slate-300 mb-0.5">{label}</span>
                <span className="text-xs text-slate-500">{context}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
