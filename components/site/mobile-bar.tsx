'use client';

import { Sparkles } from 'lucide-react';
import { Button } from './button';

/** Thumb-reach action bar shown only on phones. The guide opens through a window event. */
export function MobileBar() {
  return (
    <div className="k-mbar md:hidden" role="region" aria-label="Quick actions">
      <div className="flex items-center gap-2.5">
        <div className="flex-1 min-w-0"><Button href="/audit" size="sm" full>Free store audit</Button></div>
        <button type="button" className="k-chip !rounded-xl !px-3.5 shrink-0" onClick={() => window.dispatchEvent(new Event('kaivex:guide'))} aria-label="Open the guide">
          <Sparkles size={17} /> Guide
        </button>
      </div>
    </div>
  );
}
