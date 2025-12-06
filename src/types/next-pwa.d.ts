declare module 'next-pwa' {
  import type { NextConfig } from 'next'

  interface PWAOptions {
    dest: string
    register?: boolean
    skipWaiting?: boolean
    disable?: boolean
  }

  function withPWA(config: PWAOptions | ((nextConfig: NextConfig) => NextConfig)): (nextConfig: NextConfig) => NextConfig

  export default withPWA
}