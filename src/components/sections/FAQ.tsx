import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How accurate is the transcription?',
    answer: 'StoryForge uses enterprise-grade speech-to-text models with accuracy above 95% for standard business English. Performance improves with clear audio, and the editor allows your team to correct any transcription errors before artifact generation.',
  },
  {
    question: "Does StoryForge train AI models on my organization's meeting data?",
    answer: "No. Your meeting data is never used to train or fine-tune AI models. Each organization's data is isolated and processed only to generate artifacts for that organization.",
  },
  {
    question: 'What languages are supported?',
    answer: 'StoryForge currently supports English with high accuracy. Support for Spanish, French, German, and Japanese is in beta. Additional languages are on the roadmap—contact us if your language is a priority.',
  },
  {
    question: 'How does the Jira integration work?',
    answer: 'After reviewing and approving artifacts in StoryForge, you can push individual items or batches to any Jira project with a single click. The integration supports story point fields, assignee mapping, custom fields, and epic linking.',
  },
  {
    question: 'Can we self-host StoryForge?',
    answer: 'Single-tenant cloud deployment is available on the Pro plan, which provides dedicated infrastructure and configurable data residency. Full self-hosted deployment is available as a custom enterprise arrangement—contact our sales team.',
  },
  {
    question: 'What happens to the recording after processing?',
    answer: 'Audio recordings are processed, transcribed, and then subject to your configured retention policy. You can set automatic deletion timelines or archive transcripts long-term. Recordings are never stored longer than your policy allows.',
  },
  {
    question: 'Do all team members need to be present in the meeting?',
    answer: 'No. StoryForge processes the recording asynchronously. Team members can review and approve the generated artifacts at any time after the meeting completes.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900 text-sm leading-snug">{question}</span>
        <ChevronDown
          size={18}
          className={'text-slate-400 flex-shrink-0 transition-transform duration-200 ' + (open ? 'rotate-180' : '')}
        />
      </button>
      {open && (
        <div className="pb-5 -mt-1">
          <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-width">
        <div className="grid lg:grid-cols-3 gap-12">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">FAQ</p>
            <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 leading-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Answers to the questions our customers ask most. If you do not see what you need, our team is available via support chat.
            </p>
          </div>

          <div className="lg:col-span-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
