import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenIcon, BuildingIcon, PlugIcon, SettingsIcon, RocketIcon, WrenchIcon } from 'lucide-react';
import { config, getAssetPath } from './config';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
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
            className="h-6 rounded block dark:hidden"
          />
          <img 
            src={getAssetPath(config.logos.dark)}
            alt="CUGA Logo" 
            className="h-6 rounded hidden dark:block"
          />
          <span>{config.site.name}</span>
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        type: 'custom',
        children: (
          <GithubInfo owner="cuga-project" repo="cuga-agent"  />
        ),
      },
      {
        text: 'Website',
        url: config.urls.website,
        external: true,
      }
    ],
    githubUrl: config.urls.github,
    i18n: false,
  };
}

// Icon mapping for sidebar folders
export const iconMap = {
  Rocket: RocketIcon,
  Settings: SettingsIcon,
  BookOpen: BookOpenIcon,
  Plug: PlugIcon,
  Building: BuildingIcon,
  Wrench: WrenchIcon,
};
