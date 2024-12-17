/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },
})
const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  experimental: {
    // typedRoutes: true,
    typedEnv: true,
    staleTimes: { dynamic: 240, static: 240 },
  },
}

export default withPWA(withNextIntl(nextConfig))
