import type { Metadata } from 'next';

export const baseUrl = process.env.NODE_ENV === 'development' 
  ? new URL('http://localhost:3000')
  : new URL(process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://cuga.dev');

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl,
      images: override.openGraph?.images || '/og-image.png',
      siteName: 'CUGA Documentation',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@cuga_team',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: override.twitter?.images || '/og-image.png',
      ...override.twitter,
    },
  };
}
