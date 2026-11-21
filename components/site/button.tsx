import Link from 'next/link';

export function ArrowChip() {
  return (
    <span className="zchip" aria-hidden="true">
      <svg className="a1" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h11M10 4.5 14.5 9 10 13.5" />
      </svg>
      <svg className="a2" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13 13 5M6.5 5H13v6.5" />
      </svg>
    </span>
  );
}

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'flare';
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  className?: string;
  onClick?: () => void;
  /** Adds an arrow chip (default). Set false for plain text buttons. */
  arrow?: boolean;
  /** Kept for older call sites. */
  external?: boolean;
};

export function Button({ href, children, variant = 'primary', size = 'md', full, className = '', onClick, arrow = true }: Props) {
  const cls = ['zbtn', variant !== 'primary' ? `zbtn-${variant}` : '', size !== 'md' ? `zbtn-${size}` : '', full ? 'zbtn-full' : '', className].filter(Boolean).join(' ');
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowChip />}
    </>
  );
  const isHttp = /^https?:\/\//.test(href);
  if (isHttp || href.startsWith('mailto:')) {
    return (
      <a href={href} className={cls} onClick={onClick} {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {inner}
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow && <p className="k-eyebrow mb-4">{eyebrow}</p>}
      <Tag className="k-h2 text-[2.1rem] sm:text-[2.6rem] md:text-[3.1rem]">{title}</Tag>
      {sub && <p className="k-muted mt-4 text-[1.05rem] leading-relaxed">{sub}</p>}
    </div>
  );
}
