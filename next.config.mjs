import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  // Remove basePath and assetPrefix for GitHub Pages deployment from /docs folder
  // GitHub Pages will serve from /docs automatically
};

export default withMDX(config);