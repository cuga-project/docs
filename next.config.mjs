import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  // Configure for GitHub Pages deployment
  basePath: '/cuga-docs',
  assetPrefix: '/cuga-docs',
};

export default withMDX(config);