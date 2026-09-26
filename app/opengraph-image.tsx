import { ImageResponse } from 'next/og';

export const alt = 'Kaivex Systems | Marketing Systems & Growth Infrastructure';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0B0F14',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              backgroundColor: '#D9551F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '24px',
              color: '#FFFFFF',
            }}
          >
            K
          </div>
          <span style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '2px', color: '#E7ECEC' }}>
            KAIVEX SYSTEMS
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
          <div
            style={{
              fontSize: '52px',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-1px',
            }}
          >
            Marketing Systems & Growth Infrastructure
          </div>
          <div style={{ fontSize: '24px', color: '#98A6AD', lineHeight: 1.4 }}>
            Adding 10+ qualified leads every month, consistently. Built for B2B founders, coaches, and consultants.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '18px',
            color: '#8FE0CE',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '24px',
            width: '100%',
          }}
        >
          <span>• Dual-Engine Infrastructure</span>
          <span>• Sub-60s Speed to Lead</span>
          <span>• Dedicated SMTP Outbound</span>
          <span>• Lahore • Parlin, New Jersey</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
