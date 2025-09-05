import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  // Configure for GitHub Pages deployment from /docs folder
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withMDX(config);