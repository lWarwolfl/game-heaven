import { intlMiddleware } from '@/i18n/i18n-configs'
import type { NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
  return intlMiddleware(req)
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
