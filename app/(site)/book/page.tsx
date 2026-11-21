import type { Metadata } from 'next';
import { JsonLd } from '@/components/site/json-ld';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { Mail, MessageSquare } from 'lucide-react';
import { PageHero } from '@/components/site/page-hero';
import { CalEmbed } from '@/components/site/cal-embed';
import { Reveal, SpotCard } from '@/components/site/primitives';
import { EMAIL, WHATSAPP_URL, BOOKING_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Book a free growth call with Kaivex Systems. No sales pitch.',
  alternates: { canonical: '/book' },
};

const EXPECT = ['We look at your store, acquisition channels and conversion leaks', 'You leave with a clear view of the biggest bottlenecks', 'If we are a fit, we outline Phase 1. If not, we say so'];

export default function BookPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([['Book a call', '/book']])} />
      <PageHero eyebrow="Book a call" title={<>Book a call. <span className="k-flare">Zero pitch.</span></>} sub="Pick a time that works. We audit your current digital presence and map what would need to change." />
      <section className="k-container pt-4 grid lg:grid-cols-[1fr_300px] gap-6 items-start">
        <CalEmbed />
        <div className="space-y-4">
          <Reveal><SpotCard className="p-6"><p className="font-semibold mb-3">What to expect</p><ul className="space-y-3 text-sm k-muted">{EXPECT.map((e) => <li key={e} className="flex gap-2"><span className="k-flare">→</span>{e}</li>)}</ul></SpotCard></Reveal>
          <Reveal delay={0.08}><SpotCard className="p-6 space-y-3 text-sm">
            <p className="font-semibold">Prefer to message?</p>
            <a className="k-link inline-flex items-center gap-2" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageSquare size={14} /> WhatsApp</a><br />
            <a className="k-link inline-flex items-center gap-2" href={`mailto:${EMAIL}`}><Mail size={14} /> {EMAIL}</a><br />
            <a className="k-link k-muted text-xs" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Open Cal.com in a new tab</a>
          </SpotCard></Reveal>
        </div>
      </section>
    </>
  );
}
