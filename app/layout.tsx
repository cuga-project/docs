import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions, iconMap } from '@/lib/layout.shared';
import { config, getAssetPath } from '@/lib/config';
import SearchDialog from '@/components/search';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: config.site.name,
    template: `%s | ${config.site.name}`,
  },
  description: config.site.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cuga.dev'),
  icons: {
    icon: getAssetPath(config.logos.favicon),
    apple: getAssetPath(config.logos.favicon),
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: config.site.name,
    description: config.site.description,
    siteName: config.site.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: config.site.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.site.name,
    description: config.site.description,
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          <DocsLayout
            {...baseOptions()}
            tree={source.pageTree}
            sidebar={{
              defaultOpenLevel: 2,
              enabled: true,
              collapsible: false,
              banner: undefined,
            }}
            i18n={false}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
