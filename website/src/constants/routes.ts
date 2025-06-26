// Application routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  BLOG: '/blog',
  PORTFOLIO: '/portfolio',
  // Authentication routes
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  RESET_PASSWORD: '/auth/reset-password',
  // Dashboard routes
  DASHBOARD: '/dashboard',
  PROFILE: '/dashboard/profile',
  SETTINGS: '/dashboard/settings',
} as const;

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: 'Services', href: ROUTES.SERVICES },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Contact', href: ROUTES.CONTACT },
  { label: 'Blog', href: ROUTES.BLOG },
] as const;
