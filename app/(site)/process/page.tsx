import type { Metadata } from 'next';
import { JsonLd } from '@/components/site/json-ld';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { Check } from 'lucide-react';
import { Button, SectionHead } from '@/components/site/button';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, SpotCard } from '@/components/site/primitives';

export const metadata: Metadata = {
  title: 'Process',
  description: 'How a Kaivex engagement works: free audit, fixed-scope foundation, then an optional monthly partnership.',
  alternates: { canonical: '/process' },
};

const STEPS = [
  { tag: 'Step 01 · 15 to 30 minutes', title: 'Diagnostic audit', text: 'A short session to look at your current digital presence, acquisition channels and conversion leaks.', points: ['No sales pitch or generic agency pressure', 'Review of your storefront and visibility', 'Identification of the main conversion bottlenecks'] },
  { tag: 'Step 02 · Fixed scope', title: 'Foundation build', text: 'We implement the agreed foundation: store improvements, tracking, campaign setup and creative direction.', points: ['Scope and fee agreed before work starts', 'One account lead plus one supporting founder', 'Onboarding document, brief, timeline and QA checklist'] },
  { tag: 'Step 03 · Optional monthly', title: 'Monthly partnership', text: 'Ongoing management and improvement shaped to what your store needs.', points: ['Ad management and creative testing', 'Continuous storefront improvements', 'Structured reporting every month'] },
];

const NEED = ['A clear description of your offer and ideal customer', 'Access to your store and ad accounts', 'A single decision-maker for quick approvals', 'Honest numbers so we measure the right things'];

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([['Process', '/process']])} />
      <PageHero eyebrow="The process" title={<>No mystery. <span className="k-flare">Just a clear path.</span></>} sub="Every engagement starts with an audit, moves into a fixed-scope build and only continues monthly if it makes sense for both sides." />
      <section className="k-container pt-8 max-w-4xl">
        <div className="space-y-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={0.05}>
              <SpotCard className="p-7 md:p-9 grid md:grid-cols-[1fr_1.1fr] gap-6">
                <div>
                  <p className="k-eyebrow mb-3">{s.tag}</p>
                  <h2 className="k-h2 text-[2rem]">{i + 1}. {s.title}</h2>
                  <p className="k-muted mt-3 leading-relaxed">{s.text}</p>
                </div>
                <ul className="space-y-3 self-center">
                  {s.points.map((p) => <li key={p} className="flex gap-3 text-[1rem]"><Check size={16} className="k-current shrink-0 mt-0.5" />{p}</li>)}
                </ul>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="k-container pt-24 max-w-4xl">
        <SectionHead eyebrow="Working together" title="What we need from you" />
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {NEED.map((n, i) => (
            <Reveal key={n} delay={i * 0.05}><SpotCard className="p-5 text-[1rem]">{n}</SpotCard></Reveal>
          ))}
        </div>
        <p className="text-center text-sm k-muted mt-8">Pricing is customised to scope. Fees are always separate from ad spend, and there is no performance-based pricing for now.</p>
        <div className="flex gap-3 justify-center mt-10 flex-wrap"><Button href="/audit">Start with the free audit</Button><Button href="/book" variant="ghost">Book a call</Button></div>
      </section>
    </>
  );
}
