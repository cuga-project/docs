import type { Metadata } from 'next';

export const baseUrl = process.env.NODE_ENV === 'development' 
  ? new URL('http://localhost:3000')
  : new URL(`https://${process.env.VERCEL_URL!}`);

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl,
      images: '/og',
      siteName: 'CUGA Documentation',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@cuga_team',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/og',
      ...override.twitter,
    },
  };
}
