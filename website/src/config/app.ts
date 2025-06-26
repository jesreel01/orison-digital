// Application configuration
export const config = {
  app: {
    name: 'Orison Digital',
    description: 'Creating digital experiences that matter',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 10000,
  },
  
  features: {
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
    monitoring: process.env.NEXT_PUBLIC_MONITORING_ENABLED === 'true',
  },
  
  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
    github: process.env.NEXT_PUBLIC_GITHUB_URL || '',
  },
} as const;

// Type for the config object
export type Config = typeof config;
