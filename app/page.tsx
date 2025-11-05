import { redirect } from 'next/navigation';
import { createMetadata } from '@/lib/metadata';
import { config } from '@/lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = createMetadata({
  title: config.site.name,
  description: config.site.description,
});

export default function HomePage() {
  redirect('/docs/getting-started');
}


