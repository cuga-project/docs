import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Check if we're in production build (not dev mode)
const isProduction = process.env.NODE_ENV === 'production';
const basePath = '/research-rpa/cuga-docs';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  // Apply basePath and assetPrefix only in production builds
  ...(isProduction && {
    basePath: basePath,
    assetPrefix: basePath,
  }),
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withMDX(config);