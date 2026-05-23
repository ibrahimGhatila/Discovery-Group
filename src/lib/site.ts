export const site = {
  name: 'Discovery Group',
  legalName: 'Discovery Group Ltd',
  tagline: 'Ugandan coffee, cocoa, vanilla and spices — sourced, processed and exported at origin.',
  address: {
    line1: 'Plot 92, Namanve Industrial Area',
    line2: 'P.O. Box 24135, Kampala, Uganda',
  },
  email: 'info@discoverygroupug.com',
  phone: '',
  social: {
    facebook: 'https://www.facebook.com/discoveryimpex/',
    instagram: 'https://www.instagram.com/orocafeuganda/',
    linkedin: 'https://ug.linkedin.com/company/discovery-group-ug',
  },
};

export type NavItem = { label: string; href: string };

export const corporateNav: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Producers', href: '/producers' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const orocafeNav: NavItem[] = [
  { label: 'Products', href: '/orocafe/products' },
  { label: 'Story', href: '/orocafe#story' },
  { label: 'Origin', href: '/orocafe#origin' },
];
