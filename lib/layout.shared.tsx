import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, CodeIcon, FlaskConicalIcon, SettingsIcon, RocketIcon } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <img 
            src="/logo/cuga3.png" 
            alt="CUGA Logo" 
            className="w-6 h-6 rounded"
          />
          <span>IBM CUGA</span>
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: 'GitHub',
        url: 'https://github.ibm.com/research-rpa/cuga',
        external: true,
      },
      {
        text: 'Website',
        url: 'https://cuga.dev/',
        external: true,
      }
    ],
    githubUrl: 'https://github.ibm.com/research-rpa/cuga',
  };
}
