import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { createMetadata } from '@/lib/metadata';
import { config } from '@/lib/config';

export const metadata = createMetadata({
  title: config.site.name,
  description: config.site.description,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}