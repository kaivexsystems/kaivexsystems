export const BOOKING_URL = 'https://cal.com/kaivex-systems-a9a0ud/30min';
export const WHATSAPP_URL = 'https://wa.me/18484004949';
export const INSTAGRAM_URL = 'https://www.instagram.com/kaivexsystems/';
export const EMAIL = 'kaivexsystems@gmail.com';

export const NAV = [
  { href: '/ecommerce', label: 'E-commerce' },
  { href: '/local-services', label: 'Local services' },
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
] as const;

export function whatsappLink(text: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
export function mailLink(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const FAQ = [
  {
    q: 'Who is Kaivex a good fit for?',
    a: 'Established Shopify and direct-to-consumer brands that already have a validated product and some sales, and want to scale, fix conversion or launch something new. If you have not sold anything yet, we will tell you honestly that you are early for us.',
  },
  {
    q: 'What does the first engagement look like?',
    a: 'Phase 1 is a fixed-scope foundation: store audit, the improvements we agree on, tracking, campaign setup and creative direction. You know the scope and the fee before we start. Phase 2 is an optional monthly partnership.',
  },
  {
    q: 'Do you charge a percentage of ad spend or revenue?',
    a: 'No. There is no performance-based pricing for now. Ad spend is paid directly by you to the platforms and is always separate from our fees, so you can see where every dollar goes.',
  },
  {
    q: 'Do I have to buy every service?',
    a: 'No. Everything is modular. If your store is fine and the problem is paid acquisition, we work on that. We would rather sell you less than sell you something you do not need.',
  },
  {
    q: 'Who will I actually work with?',
    a: 'The two founders. Every client has one designated account lead and one supporting founder, so you always know who owns your account.',
  },
  {
    q: 'What is not included?',
    a: 'Advertising spend, inventory, fulfilment and customer support are excluded unless separately agreed.',
  },
  {
    q: 'Can you show me results?',
    a: 'We are building our client case-study library and we only publish results with client approval. Until then, our Work page shows clearly labelled concept teardowns, and we are happy to run a free audit on your store so you can judge our thinking directly.',
  },
];

export const PILLARS = [
  {
    id: 'store',
    label: 'Shopify & conversion',
    blurb: 'The storefront is where every dollar of ad spend either pays off or leaks away.',
    items: [
      'Store development, redesign and optimization',
      'Product pages built around buying decisions',
      'Landing pages for campaigns and launches',
      'UX fixes: speed, mobile, navigation, checkout friction',
      'Integrations and conversion tracking',
    ],
  },
  {
    id: 'ads',
    label: 'Performance marketing',
    blurb: 'Meta and Google run from the same measurement, so you can see what actually drives sales.',
    items: [
      'Meta Ads and Google Ads strategy',
      'Campaign setup and ongoing management',
      'Retargeting for visitors who almost bought',
      'Budget and campaign optimization',
      'Clear reporting tied to revenue, not vanity metrics',
    ],
  },
  {
    id: 'creative',
    label: 'Creative & content',
    blurb: 'Ad creative fatigues fast. We treat it as a testing system, not a one-off shoot.',
    items: [
      'Advertising creative strategy',
      'Creative production and structured testing',
      'Content planning and social direction',
      'Product launch campaigns',
    ],
  },
  {
    id: 'retention',
    label: 'Growth & retention',
    blurb: 'Getting a customer is expensive. Getting a second order should not be.',
    items: [
      'Email marketing and flows',
      'Customer journey improvements',
      'Analytics and reporting',
      'Ongoing storefront improvements',
    ],
  },
] as const;
