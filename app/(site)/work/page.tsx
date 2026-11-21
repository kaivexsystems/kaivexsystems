import type { Metadata } from 'next';
import { JsonLd } from '@/components/site/json-ld';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button, SectionHead } from '@/components/site/button';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, SpotCard } from '@/components/site/primitives';
import { BeforeAfter } from '@/components/site/widgets';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Clearly labelled concept teardowns and strategy deliverables from Kaivex Systems. Client case studies are published as they are approved.',
  alternates: { canonical: '/work' },
};

const FIXES = [
  { t: 'Lead with the outcome', d: 'The headline states the result the customer wants instead of the product name.' },
  { t: 'Proof beside the price', d: 'Rating and review count sit where the buying decision happens.' },
  { t: 'Specific button, specific promise', d: '"Submit" becomes "Add to cart" with price, shipping and returns beside it.' },
  { t: 'Answer the last objection', d: 'A guarantee line removes risk right before the click.' },
];

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([['Work', '/work']])} />
      <PageHero eyebrow="Work" title={<>Our thinking, <span className="k-flare">shown openly.</span></>} sub="We publish client results only with client approval. Until the case-study library grows, here are labelled concept projects and strategy work so you can judge how we think." />

      <section className="k-container pt-8">
        <Reveal>
          <div className="k-card p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="k-chip !cursor-default" data-active="true">Concept project</span>
              <span className="text-sm k-muted">Illustrative product-page teardown. Not a client result.</span>
            </div>
            <h2 className="k-h2 text-[2rem] md:text-[2.6rem] mb-6">Product page teardown: from generic to persuasive</h2>
            <BeforeAfter />
            <p className="text-sm k-muted mt-4 mb-8">Drag the handle to compare. This is a fictional store used to show the kind of changes we make. It makes no performance claims.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {FIXES.map((f, i) => (
                <div key={f.t} className="flex gap-4 rounded-xl p-4" style={{ background: 'var(--k-surface)', border: '1px solid var(--k-border)' }}>
                  <span className="k-h2 text-[1.8rem] k-flare leading-none">{i + 1}</span>
                  <div><p className="font-semibold text-[0.95rem]">{f.t}</p><p className="text-[0.9rem] k-muted mt-1">{f.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="k-container pt-16">
        <SectionHead eyebrow="Strategy deliverables" title="Sample work" center={false} />
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <Reveal>
            <Link href="/rise-with-fariha" className="block h-full">
              <SpotCard tilt className="p-7 h-full">
                <span className="k-chip !cursor-default !text-xs mb-4">Sample deliverable</span>
                <h3 className="font-semibold text-[1.2rem] flex items-center gap-2">Rise with Fariha: executive acquisition strategy <ArrowUpRight size={16} className="k-flare" /></h3>
                <p className="k-muted text-[1rem] leading-relaxed mt-3">A full acquisition strategy and commercial decision document, the kind of working plan we produce before building anything.</p>
              </SpotCard>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <SpotCard className="p-7 h-full" >
              <span className="k-chip !cursor-default !text-xs mb-4">Coming soon</span>
              <h3 className="font-semibold text-[1.2rem]">Client case studies</h3>
              <p className="k-muted text-[1rem] leading-relaxed mt-3">Each case study will follow one structure: the problem, the objectives, the work, the process, the measured results and the client approval.</p>
            </SpotCard>
          </Reveal>
        </div>
        <div className="text-center mt-14"><Button href="/audit">Get your own store audited</Button></div>
      </section>
    </>
  );
}
