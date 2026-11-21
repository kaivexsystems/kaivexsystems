import Link from 'next/link';
import { Mail, MessageSquare } from 'lucide-react';
import { KaivexLogo } from '@/components/ui/kaivex-logo';
import { EMAIL, INSTAGRAM_URL, NAV, WHATSAPP_URL } from '@/lib/site';

export function Footer() {
  return (
    <footer style={{ background: 'var(--k-footer)', borderTop: '1px solid var(--k-border)' }} className="mt-24 pb-24 md:pb-0">
      <div className="k-container py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <span className="k-light-only"><KaivexLogo theme="light" size="md" showSublabel /></span>
          <span className="k-dark-only"><KaivexLogo theme="dark" size="md" showSublabel /></span>
          <p className="k-muted text-[0.95rem] leading-relaxed mt-4 max-w-xs">
            A digital growth company. We build the storefront and acquisition systems that help e-commerce brands attract customers, convert more visitors and grow online sales.
          </p>
        </div>
        <div>
          <p className="k-eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5 text-[0.95rem]">
            {NAV.map((n) => (
              <li key={n.href}><Link className="k-link" href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="k-eyebrow mb-4">Start</p>
          <ul className="space-y-2.5 text-[0.95rem]">
            <li><Link className="k-link" href="/audit">Free store audit</Link></li>
            <li><Link className="k-link" href="/book">Book a call</Link></li>
            <li><Link className="k-link" href="/privacy">Privacy</Link></li>
            <li><Link className="k-link" href="/terms">Terms</Link></li>
          </ul>
        </div>
        <div>
          <p className="k-eyebrow mb-4">Talk to us</p>
          <ul className="space-y-2.5 text-[0.95rem]">
            <li><a className="k-link inline-flex items-center gap-2" href={`mailto:${EMAIL}`}><Mail size={14} /> {EMAIL}</a></li>
            <li><a className="k-link inline-flex items-center gap-2" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageSquare size={14} /> WhatsApp</a></li>
            <li><a className="k-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram @kaivexsystems</a></li>
          </ul>
        </div>
      </div>
      <div className="k-container pb-8 flex flex-wrap justify-between gap-3 text-[0.85rem] k-muted">
        <span>© {new Date().getFullYear()} Kaivex Systems Ltd. All rights reserved.</span>
        <span>Concept projects are always labelled as concepts.</span>
      </div>
    </footer>
  );
}
