import type { Metadata } from 'next';
import { JsonLd } from '@/components/site/json-ld';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { PageHero } from '@/components/site/page-hero';
import { AuditTool } from '@/components/site/audit-tool';

export const metadata: Metadata = {
  title: 'Free Store Audit',
  description: 'A 12-question self-check that scores your Shopify store on product pages, checkout, speed and tracking, then tells you what to fix first.',
  alternates: { canonical: '/audit' },
};

export default function AuditPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([['Free store audit', '/audit']])} />
      <PageHero eyebrow="Free store audit" title={<>Where is your store <span className="k-flare">leaking?</span></>} sub="Answer twelve quick questions. You get a score and the first things to fix. If you want us to audit your real store, send it in at the end." />
      <section className="k-container pt-4"><AuditTool /></section>
    </>
  );
}
