import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, CodeIcon, FlaskConicalIcon, SettingsIcon, RocketIcon } from 'lucide-react';
import { config, getAssetPath } from './config';

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
            src={getAssetPath(config.logos.light)}
            alt="CUGA Logo" 
            className="w-6 h-6 rounded block dark:hidden"
          />
          <img 
            src={getAssetPath(config.logos.dark)}
            alt="CUGA Logo" 
            className="w-6 h-6 rounded hidden dark:block"
          />
          <span>{config.site.name}</span>
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: 'GitHub',
        url: config.urls.github,
        external: true,
      },
      {
        text: 'Website',
        url: config.urls.website,
        external: true,
      }
    ],
    githubUrl: config.urls.github,
  };
}
