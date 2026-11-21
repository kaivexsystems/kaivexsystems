import type { Metadata } from 'next';
import { JsonLd } from '@/components/site/json-ld';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { Check } from 'lucide-react';
import { Button, SectionHead } from '@/components/site/button';
import { PageHero } from '@/components/site/page-hero';
import { Reveal, SpotCard, Accordion } from '@/components/site/primitives';

export const metadata: Metadata = {
  title: 'Local Services Growth & Lead Generation',
  description: 'Websites, local SEO, Google Business Profile and Google Ads for HVAC, roofing and other established local service businesses.',
  alternates: { canonical: '/local-services' },
};

const LOCAL_FAQ = [
  { q: 'Which businesses is the local services offer for?', a: 'Established local service businesses that already have customers and want a steadier flow of enquiries. We are starting with HVAC and roofing companies, and may extend to plumbing, electrical and other field contractors.' },
  { q: 'How long does local SEO take to work?', a: 'Local SEO usually builds over months rather than weeks. Google Ads can produce enquiries sooner, which is why we often run both: ads for near-term enquiries while search visibility grows.' },
  { q: 'Do you manage our Google Business Profile?', a: 'Yes. Phase 1 includes optimizing your Google Business Profile, and Phase 2 can include ongoing management, so your listing, categories, services and photos stay accurate and complete.' },
  { q: 'What is not included?', a: 'Advertising spend, call-centre operations and sales closing are excluded. SMS automation is not part of the core offer.' },
];

const BLOCKS = [
  { title: 'Website & conversion', items: ['Website development or redesign', 'Service-specific landing pages', 'Mobile-friendly layouts', 'Enquiry pathways, forms and tracking'] },
  { title: 'Local SEO', items: ['Local SEO audit and keyword research', 'Google Business Profile optimization', 'On-page SEO, service and location pages', 'Citation strategy'] },
  { title: 'Paid acquisition', items: ['Google Ads strategy and management', 'Local search campaigns', 'Keyword targeting', 'Conversion tracking and optimization'] },
  { title: 'Lead capture', items: ['Enquiry form improvements', 'Lead source tracking', 'Contact and booking integrations', 'Conversion journey improvements'] },
];

export default function LocalPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([['Local services', '/local-services']]), serviceSchema('Local Services Growth & Lead Generation', 'Websites, local SEO, Google Business Profile optimization and Google Ads for HVAC, roofing and other established local service businesses.', '/local-services', 'HVAC, roofing and other established local service businesses'), faqSchema(LOCAL_FAQ)]} />
      <PageHero eyebrow="Local services growth" title={<>Get found. Get the enquiry. <span className="k-flare">Know where it came from.</span></>} sub="For established local service businesses, starting with HVAC and roofing, that want stronger local visibility and a more reliable flow of enquiries.">
        <Button href="/book">Book a call</Button>
        <Button href="/process" variant="ghost">See the process</Button>
      </PageHero>
      <section className="k-container pt-12">
        <SectionHead eyebrow="What is included" title="Four parts of one local system" />
        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.08}>
              <SpotCard tilt className="p-7 h-full">
                <h3 className="font-semibold text-[1.15rem] mb-4">{b.title}</h3>
                <ul className="space-y-2.5">{b.items.map((t) => <li key={t} className="flex gap-3 text-[1rem]"><Check size={15} className="k-current shrink-0 mt-0.5" />{t}</li>)}</ul>
              </SpotCard>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-sm k-muted mt-6 max-w-xl mx-auto">Phase 1 is a fixed-scope digital foundation. Phase 2 is optional monthly visibility and lead generation. Ad spend, call-centre operations and sales closing are excluded.</p>
        <div className="text-center mt-10"><Button href="/book">Talk through your business</Button></div>
      </section>
      <section className="k-container pt-24 max-w-3xl" aria-labelledby="h-local-faq">
        <SectionHead eyebrow="Questions" title={<span id="h-local-faq">Local services, answered</span>} />
        <div className="mt-10"><Accordion items={LOCAL_FAQ} /></div>
      </section>
    </>
  );
}
