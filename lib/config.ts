/**
 * Centralized configuration for the documentation site
 * Edit this file to change base paths, URLs, and other settings
 */

// Base configuration
export const config = {
  // Base path for GitHub Pages deployment
  basePath: '/research-rpa/cuga-docs',
  
  // Site information
  site: {
    name: 'IBM CUGA',
    description: 'Computer Using Generalist Agent - built for reliability and trust',
  },
  
  // External URLs
  urls: {
    github: 'https://github.ibm.com/research-rpa/cuga',
    website: 'https://cuga.dev/',
    support: 'mailto:sami.marreed@ibm.com',
  },
  
  // Logo paths (relative to public folder)
  logos: {
    favicon: '/logo/logo-dark.png',
    light: '/logo/logo-light.png',
    dark: '/logo/logo-dark.png',
  },
  
  // Theme colors
  colors: {
    primary: '#8AADF4',
    light: '#B7BDF8',
    dark: '#5B6078',
  },
  
  // Footer configuration
  footer: {
    text: 'Made by the CUGA Team at IBM Research',
    links: [
      {
        title: 'GitHub',
        href: 'https://github.ibm.com/research-rpa/cuga',
        external: true,
      },
      {
        title: 'Support',
        href: 'mailto:sami.marreed@ibm.com',
        external: true,
      },
    ],
  },
} as const;

// Helper functions
export function getAssetPath(path: string): string {
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? config.basePath : '';
  return `${basePath}${path}`;
}

export function getBasePath(): string {
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? config.basePath : '';
}

// Next.js configuration helpers (for reference)
// Note: Next.js config is handled directly in next.config.mjs to avoid module import issues
export function getNextConfig() {
  const isProduction = process.env.NODE_ENV === 'production';
  return {
    ...(isProduction && {
      basePath: config.basePath,
      assetPrefix: config.basePath,
    }),
  };
}
