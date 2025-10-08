import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions, iconMap } from '@/lib/layout.shared';
import { config } from '@/lib/config';
import SearchDialog from '@/components/search';
import type { ReactNode } from 'react';

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
