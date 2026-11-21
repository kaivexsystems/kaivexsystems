import type { Metadata } from 'next';
import { JsonLd } from '@/components/site/json-ld';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { Check, X } from 'lucide-react';
import { Button, SectionHead } from '@/components/site/button';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, SpotCard, Accordion } from '@/components/site/primitives';
import { PillarTabs } from '@/components/site/widgets';
import { FAQ } from '@/lib/site';

export const metadata: Metadata = {
  title: 'E-commerce Growth & Acquisition',
  description: 'Shopify development and optimization, Meta and Google Ads, creative testing and retention for established DTC brands. Fixed-scope foundation, then a monthly partnership.',
  alternates: { canonical: '/ecommerce' },
};

const FIT = ['Established Shopify or DTC brand', 'A validated product with real sales', 'Preparing to scale, improve acquisition or launch', 'Willing to share store and ad account access'];
const NOT_FIT = ['No product-market fit or no sales yet', 'Expecting guaranteed results or a fixed number of sales', 'Looking for the cheapest possible freelancer', 'Wanting us to handle fulfilment or customer support'];

const PHASES = [
  { tag: 'Phase 1', title: 'Store & Acquisition Foundation', text: 'A fixed-scope audit and implementation.', items: ['Shopify improvements', 'Conversion tracking', 'Campaign setup', 'Creative direction', 'Launch preparation'] },
  { tag: 'Phase 2', title: 'Monthly Growth Partnership', text: 'Optional ongoing work, shaped to your needs.', items: ['Paid campaign management', 'Creative testing', 'Campaign optimization', 'Content planning', 'Storefront improvements', 'Performance reporting'] },
];

export default function EcommercePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([['E-commerce', '/ecommerce']]), serviceSchema('E-commerce Growth & Acquisition', 'Shopify development and optimization, Meta and Google Ads, creative testing and retention for established DTC brands.', '/ecommerce', 'Established Shopify and direct-to-consumer brands'), faqSchema(FAQ)]} />
      <PageHero eyebrow="E-commerce growth & acquisition" title={<>Build the store. Run the ads. <span className="k-flare">Measure the result.</span></>} sub="For established Shopify and DTC brands that already have sales and want to convert more visitors, acquire customers more efficiently or launch a product properly.">
        <Button href="/audit">Get a free store audit</Button>
        <Button href="/book" variant="ghost">Book a call</Button>
      </PageHero>

      <section className="k-container pt-16">
        <SectionHead eyebrow="Scope" title="Everything we can do for your store" sub="Pick what you need. We do not force every client to buy every service." />
        <Reveal className="mt-12"><PillarTabs /></Reveal>
      </section>

      <section className="k-container pt-28">
        <SectionHead eyebrow="Engagement model" title="Two phases, clearly separated" />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {PHASES.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.1}>
              <SpotCard tilt className="p-8 h-full">
                <p className="k-eyebrow mb-3">{p.tag}</p>
                <h3 className="k-h2 text-[1.9rem]">{p.title}</h3>
                <p className="k-muted mt-2 mb-5">{p.text}</p>
                <ul className="space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-[1rem]"><Check size={15} className="k-current shrink-0" />{it}</li>
                  ))}
                </ul>
              </SpotCard>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-sm k-muted mt-6">Advertising spend, inventory, fulfilment and customer support are excluded unless separately agreed.</p>
      </section>

      <section className="k-container pt-28">
        <SectionHead eyebrow="Fit check" title="Who this is for, and who it is not" sub="We would rather tell you early than waste your time." />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          <Reveal>
            <SpotCard className="p-7 h-full">
              <p className="font-semibold mb-4 k-current">A good fit</p>
              <ul className="space-y-3 text-[1rem]">{FIT.map((t) => <li key={t} className="flex gap-3"><Check size={16} className="k-current shrink-0 mt-0.5" />{t}</li>)}</ul>
            </SpotCard>
          </Reveal>
          <Reveal delay={0.08}>
            <SpotCard className="p-7 h-full">
              <p className="font-semibold mb-4 k-flare">Probably not yet</p>
              <ul className="space-y-3 text-[1rem]">{NOT_FIT.map((t) => <li key={t} className="flex gap-3"><X size={16} className="k-flare shrink-0 mt-0.5" />{t}</li>)}</ul>
            </SpotCard>
          </Reveal>
        </div>
      </section>

      <section className="k-container pt-28 max-w-3xl">
        <SectionHead eyebrow="Questions" title="Before you reach out" />
        <div className="mt-10"><Accordion items={FAQ} /></div>
        <div className="text-center mt-10"><Button href="/audit">Start with the free audit</Button></div>
      </section>
    </>
  );
}
