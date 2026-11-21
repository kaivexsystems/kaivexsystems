'use client';

import dynamic from 'next/dynamic';

// The guide is not needed for first paint, so it loads after the page is interactive.
const Guide = dynamic(() => import('./guide').then((m) => m.Guide), { ssr: false });

export function GuideLoader() {
  return <Guide />;
}
