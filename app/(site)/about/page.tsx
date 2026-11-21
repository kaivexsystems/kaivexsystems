import type { Metadata } from 'next';
import { JsonLd } from '@/components/site/json-ld';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { Button, SectionHead } from '@/components/site/button';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, SpotCard } from '@/components/site/primitives';

export const metadata: Metadata = {
  title: 'About',
  description: 'Kaivex Systems is led by two founders, Ahmad Farooq and Ayaan Habib, with clear ownership of strategy and technology, and performance marketing and creative.',
  alternates: { canonical: '/about' },
};

const FOUNDERS = [
  { initials: 'AF', name: 'Ahmad Farooq', role: 'Co-Founder · GTM, Strategy & Technology', points: ['Shopify and website development', 'Conversion architecture and tracking', 'Positioning, strategy and systems', 'Email marketing and automation'] },
  { initials: 'AH', name: 'Ayaan Habib', role: 'Co-Founder · Performance Marketing & Creative', points: ['Meta Ads and Google Ads', 'Advertising creative and testing', 'Product research and launches', 'Social media marketing'] },
];

const FACTS: [string, string][] = [
  ['What Kaivex is', 'A digital growth company that builds the storefront and customer acquisition systems for e-commerce brands.'],
  ['Who it is for', 'Established Shopify and DTC brands with validated products. Secondary offer for HVAC and roofing businesses.'],
  ['Founders', 'Ahmad Farooq (GTM, strategy and technology) and Ayaan Habib (performance marketing and creative).'],
  ['Engagement model', 'Phase 1: fixed-scope foundation. Phase 2: optional monthly growth partnership.'],
  ['Pricing principles', 'No performance-based pricing. Ad spend is separate from fees. Scope is defined before work starts.'],
  ['Markets', 'United States and Australia, with the United Kingdom and other markets by agreement.'],
  ['Contact', 'kaivexsystems@gmail.com, WhatsApp +1 848 400 4949, or book a call.'],
];

const PRINCIPLES = [
  { t: 'Clear ownership', d: 'Every department, task and client responsibility has an owner.' },
  { t: 'Consistent execution', d: 'Acquisition, publishing and delivery happen every day, not only when motivation is high.' },
  { t: 'Repeatable systems', d: 'Processes are documented, measured and improved so quality does not depend on luck.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([['About', '/about']])} />
      <PageHero eyebrow="About" title={<>Two founders. <span className="k-flare">One accountable team.</span></>} sub="Kaivex is a digital growth company. Both founders are involved in every engagement, with one account lead and one supporting founder for each client." />
      <section className="k-container pt-8">
        <div className="grid md:grid-cols-2 gap-5">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <SpotCard tilt className="p-8 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-14 h-14 rounded-full flex items-center justify-center font-bold" style={{ background: i === 0 ? 'var(--k-flare)' : 'var(--k-current)', color: '#fff' }}>{f.initials}</span>
                  <div><h2 className="font-semibold text-[1.2rem]">{f.name}</h2><p className="text-sm k-muted">{f.role}</p></div>
                </div>
                <ul className="space-y-2.5 text-[1rem]">{f.points.map((p) => <li key={p} className="flex gap-3"><span className="k-flare">→</span>{p}</li>)}</ul>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="k-container pt-24">
        <SectionHead eyebrow="Operating principles" title="How we run the company" />
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}><SpotCard className="p-7 h-full"><h3 className="font-semibold mb-2">{p.t}</h3><p className="k-muted text-[1rem] leading-relaxed">{p.d}</p></SpotCard></Reveal>
          ))}
        </div>
      </section>
      <section className="k-container pt-24 max-w-3xl" aria-labelledby="h-glance">
        <SectionHead eyebrow="At a glance" title={<span id="h-glance">Kaivex in brief</span>} />
        <dl className="k-card mt-10 divide-y" style={{ borderColor: 'var(--k-border)' }}>
          {FACTS.map(([k, v]) => (
            <div key={k} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 px-5 py-4" style={{ borderColor: 'var(--k-border)' }}>
              <dt className="font-bold">{k}</dt>
              <dd className="k-muted">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="text-center mt-12"><Button href="/book">Talk to the founders</Button></div>
      </section>
    </>
  );
}
