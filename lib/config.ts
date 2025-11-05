/**
 * Centralized configuration for the documentation site
 * Edit this file to change base paths, URLs, and other settings
 */

// Base configuration
export const config = {
  // Base path for GitHub Pages deployment
  basePath: '',
  
  // Site information
  site: {
    name: 'CUGA AGENT',
    description: 'ConfigUrable Generalist Agent - built for reliability and trust',
  },
  
  // External URLs
  urls: {
    github: 'https://github.com/cuga-project/cuga-agent',
    website: 'https://cuga.dev/',
  },
  
  // Logo paths (relative to public folder)
  logos: {
    favicon: '/favicon.png',
    light: '/logo/cuga-logo.png',
    dark: '/logo/cuga-logo.png',
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
        href: 'https://github.com/cuga-project/cuga-agent',
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
