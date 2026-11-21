import { Nav } from '@/components/site/nav';
import { Footer } from '@/components/site/footer';
import { GuideLoader } from '@/components/site/guide-loader';
import { MobileBar } from '@/components/site/mobile-bar';
import { ButtonFx } from '@/components/site/button-fx';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="k-skip">Skip to content</a>
      <Nav />
      <main id="main" tabIndex={-1} className="pt-[68px] outline-none">{children}</main>
      <Footer />
      <MobileBar />
      <GuideLoader />
      <ButtonFx />
    </>
  );
}
