import { ShieldCheck, Users, Layers, Gauge } from 'lucide-react';
import { Button, SectionHead } from '@/components/site/button';
import { Reveal, SpotCard, Accordion } from '@/components/site/primitives';
import { HeroStoreMock, ProfitSimulator, PillarTabs } from '@/components/site/widgets';
import { JsonLd } from '@/components/site/json-ld';
import { faqSchema } from '@/lib/schema';
import { FAQ } from '@/lib/site';

const MARQUEE = ['Shopify builds', 'Product pages', 'Conversion tracking', 'Meta Ads', 'Google Ads', 'Creative testing', 'Email flows', 'Launch campaigns', 'Reporting'];

const PROBLEMS = [
  { n: '01', title: 'Disconnected execution', text: 'The store, the ads and the creative are run by different people with different goals. Spend ends up pointing at pages that cannot convert.' },
  { n: '02', title: 'Traffic that leaks', text: 'Generic product pages, slow mobile loads and checkout friction mean paid visitors leave before they buy.' },
  { n: '03', title: 'Spend nobody can explain', text: 'Without reliable tracking you are guessing which campaigns and creatives actually produce profitable orders.' },
];

const STEPS = [
  { n: '1', title: 'Free store audit', text: 'We look at your storefront, acquisition and tracking and tell you where the biggest leaks are. No sales pitch.' },
  { n: '2', title: 'Foundation sprint', text: 'Phase 1 is fixed scope: agreed store improvements, tracking, campaign setup and creative direction. You know scope and fee up front.' },
  { n: '3', title: 'Monthly partnership', text: 'Phase 2 is optional: ads, creative testing, storefront improvements and reporting, with one account lead you can reach.' },
];

const PRINCIPLES = [
  { icon: Layers, title: 'One system, not three vendors', text: 'Store, ads and creative planned together so each one supports the others.' },
  { icon: ShieldCheck, title: 'Clear scope, honest limits', text: 'Deliverables are defined. Ad spend, inventory and fulfilment stay separate unless agreed.' },
  { icon: Users, title: 'Founder-led accountability', text: 'Every client has an account lead and a supporting founder, so someone always owns the result.' },
  { icon: Gauge, title: 'Measured, not guessed', text: 'Tracking is built first so decisions come from your own revenue data.' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ)} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-x-0 -top-24 h-[520px] -z-10" style={{ background: 'radial-gradient(60% 60% at 70% 20%, var(--k-glow), transparent 70%)' }} />
        <div className="k-container grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-14 items-center pt-6 pb-12 md:py-16">
          <div>
            <h1 className="k-h1 text-[2.75rem] sm:text-[3.9rem] lg:text-[4.8rem] k-rise">
              Turn more of your traffic <span style={{ color: 'var(--k-flare-text)' }}>into profit.</span>
            </h1>
            <p className="k-muted text-[1.1rem] leading-relaxed mt-6 max-w-xl k-rise" style={{ ['--d' as string]: '0.08s' }}>
              We rebuild the storefront, run the ads and test the creative as one system, so established Shopify brands can see exactly what drives sales and what is just burning budget.
            </p>
            <div className="flex flex-wrap gap-3 mt-8 k-rise" style={{ ['--d' as string]: '0.16s' }}>
              <Button href="/audit" size="lg">Get a free store audit</Button>
            </div>
            <p className="mt-7 text-[0.95rem] k-muted k-rise" style={{ ['--d' as string]: '0.24s' }}>
              Founder-led &nbsp;·&nbsp; Fixed-scope first phase &nbsp;·&nbsp; Ad spend always separate
            </p>
          </div>
          <div className="k-rise" style={{ ['--d' as string]: '0.2s' }}><HeroStoreMock /></div>
        </div>
      </section>

      {/* CAPABILITIES (decorative) */}
      <section aria-hidden="true" className="py-5 overflow-hidden" style={{ borderBlock: '1px solid var(--k-border)' }}>
        <div className="k-marquee">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="mx-6 text-[0.85rem] font-semibold uppercase tracking-[0.14em] k-muted whitespace-nowrap">
              {m} <span className="ml-12" style={{ color: 'var(--k-flare)' }}>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="k-container pt-20 md:pt-28 k-defer" aria-labelledby="h-problem">
        <SectionHead eyebrow="The bottleneck" title={<span id="h-problem">Why good products stall</span>} sub="It is rarely the product. It is how the store, the ads and the measurement fit together." />
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory k-hscroll -mx-5 px-5 md:mx-0 md:px-0 pb-2">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08} className="snap-start shrink-0 w-[82%] sm:w-[60%] md:w-auto [&>*]:h-full">
              <SpotCard tilt className="p-7 h-full">
                <p className="k-eyebrow mb-5">Problem {p.n}</p>
                <h3 className="font-bold text-[1.2rem] mb-3">{p.title}</h3>
                <p className="k-muted text-[1rem] leading-relaxed">{p.text}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SIMULATOR */}
      <section className="k-container pt-20 md:pt-28 k-defer" aria-labelledby="h-sim">
        <SectionHead eyebrow="Try it" title={<span id="h-sim">Is your ad spend actually profitable?</span>} sub="Enter your numbers. See your break-even, where each $100 of sales really goes, and which single fix is worth the most." />
        <Reveal className="mt-10 md:mt-12"><ProfitSimulator /></Reveal>
        <div className="text-center mt-8"><Button href="/audit" variant="ghost">Find the fixes in your own store</Button></div>
      </section>

      {/* OFFER */}
      <section className="k-container pt-20 md:pt-28 k-defer" aria-labelledby="h-offer">
        <SectionHead eyebrow="What we do" title={<span id="h-offer">One growth system, four parts</span>} sub="Modular on purpose. We only work on what your store actually needs." />
        <Reveal className="mt-10 md:mt-12"><PillarTabs /></Reveal>
        <div className="text-center mt-8"><Button href="/ecommerce" variant="ghost">See the full e-commerce offer</Button></div>
      </section>

      {/* PROCESS */}
      <section className="k-container pt-20 md:pt-28 k-defer" aria-labelledby="h-process">
        <SectionHead eyebrow="The process" title={<span id="h-process">How it works</span>} />
        <ol className="relative grid md:grid-cols-3 gap-8 md:gap-5 mt-10 md:mt-12 list-none p-0">
          <div aria-hidden className="hidden md:block absolute top-[2.35rem] left-[16%] right-[16%] h-px" style={{ background: 'repeating-linear-gradient(90deg, var(--k-border-strong) 0 6px, transparent 6px 12px)' }} />
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.1}>
                <div className="relative text-center md:px-4">
                  <div aria-hidden className="relative mx-auto w-[4.7rem] h-[4.7rem] rounded-full flex items-center justify-center k-h2 text-[1.9rem]" style={{ background: 'var(--k-surface)', border: '1px solid var(--k-border-strong)', boxShadow: 'var(--k-shadow)' }}>{s.n}</div>
                  <h3 className="font-bold text-[1.15rem] mt-5">{s.title}</h3>
                  <p className="k-muted text-[1rem] leading-relaxed mt-2">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="text-center mt-10"><Button href="/process" variant="ghost">The full process</Button></div>
      </section>

      {/* PRINCIPLES */}
      <section className="k-container pt-20 md:pt-28 k-defer" aria-labelledby="h-how">
        <SectionHead eyebrow="How we work" title={<span id="h-how">Built to be accountable</span>} />
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mt-10 md:mt-12">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="[&>*]:h-full">
              <SpotCard className="p-6 flex gap-5 h-full">
                <span aria-hidden className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'var(--k-glow)', color: 'var(--k-flare-text)' }}><p.icon size={20} /></span>
                <div>
                  <h3 className="font-bold mb-1.5">{p.title}</h3>
                  <p className="k-muted text-[1rem] leading-relaxed">{p.text}</p>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROOF */}
      <section className="k-container pt-20 md:pt-28 k-defer" aria-labelledby="h-proof">
        <Reveal>
          <div className="k-card p-6 sm:p-8 md:p-12 grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div>
              <p className="k-eyebrow mb-3">Proof, labelled honestly</p>
              <h2 id="h-proof" className="k-h2 text-[1.9rem] sm:text-[2.3rem] md:text-[2.6rem]">Concept teardowns today. Client case studies as they are approved.</h2>
              <p className="k-muted mt-4 leading-relaxed">We only publish client results with client approval, and we always label concept work as concept work. Until the library grows, judge our thinking directly.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="/work" full>See the work</Button>
              <Button href="/audit" variant="ghost" full>Get your store audited</Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="k-container pt-20 md:pt-28 max-w-3xl k-defer" aria-labelledby="h-faq">
        <SectionHead eyebrow="Questions" title={<span id="h-faq">Straight answers</span>} />
        <div className="mt-10"><Accordion items={FAQ} /></div>
      </section>

      {/* FINAL CTA */}
      <section className="k-container pt-20 md:pt-28 k-defer">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.6rem] md:rounded-[2rem] px-6 sm:px-8 py-12 md:py-20 text-center" style={{ background: 'var(--k-cta)', color: 'var(--k-cta-text)' }}>
            <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-40" style={{ background: 'var(--k-flare)' }} />
            <h2 className="k-h2 relative text-[2.1rem] sm:text-[2.6rem] md:text-[3.5rem]">Find your store&apos;s biggest leak.</h2>
            <p className="relative mt-4 opacity-85 max-w-lg mx-auto">Start with the free audit. If it makes sense to work together, we will say so. If it does not, you still keep the findings.</p>
            <div className="relative flex flex-wrap gap-x-6 gap-y-4 justify-center items-center mt-8">
              <Button href="/audit" variant="flare" size="lg">Start the free audit</Button>
              <a href="/book" className="k-link font-bold text-[1.02rem]">Or book a call</a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
