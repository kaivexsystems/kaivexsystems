export function PageHero({ eyebrow, title, sub, children }: { eyebrow?: string; title: React.ReactNode; sub: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 -top-24 h-[420px] -z-10" style={{ background: 'radial-gradient(55% 60% at 50% 0%, var(--k-glow), transparent 70%)' }} />
      <div className="k-container text-center py-10 md:py-20 max-w-3xl">
        {eyebrow && <p className="k-eyebrow mb-5 k-rise">{eyebrow}</p>}
        <h1 className="k-h1 text-[2.6rem] sm:text-[3.4rem] md:text-[4.4rem] k-rise" style={{ ['--d' as string]: '0.06s' }}>{title}</h1>
        <p className="k-muted text-[1.08rem] leading-relaxed mt-6 k-rise" style={{ ['--d' as string]: '0.14s' }}>{sub}</p>
        {children && <div className="flex flex-wrap gap-3 justify-center mt-8 k-rise" style={{ ['--d' as string]: '0.22s' }}>{children}</div>}
      </div>
    </section>
  );
}
