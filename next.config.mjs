import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  // For GitHub Pages serving from /docs folder, no basePath needed
  // The repository path is handled by GitHub Pages automatically
};

export default withMDX(config);