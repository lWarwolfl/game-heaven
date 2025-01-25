import WrappedProviders from '@/components/providers'
import { HOST } from '@/config'
import { getAlternativeLocales, getLocaleWithProps } from '@/i18n/i18n-configs'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { type PropsWithChildren } from 'react'

export const metadata: Metadata = {
  metadataBase: new URL(HOST + '/'),
  alternates: {
    canonical: '/',
    languages: getAlternativeLocales(),
  },
  title: 'Game Heaven - Your Ultimate Online Game Shop',
  description:
    'Game Heaven is your one-stop online game shop for the latest video games, accessories, and collectibles. We offer a wide selection of gaming products, unbeatable deals, and reliable customer service for gamers of all levels.',
  keywords: [
    'Game Heaven',
    'online game shop',
    'video games',
    'gaming accessories',
    'game collectibles',
    'latest games',
    'gaming store',
    'buy video games',
    'online gaming store',
    'game deals',
    'game shopping',
    'gaming products',
  ],
}

type RootLayoutProps = PropsWithChildren

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocaleWithProps()

  return (
    <html lang={locale.locale} dir={locale.direction} suppressHydrationWarning>
      <body
        className={cn(
          locale.font?.className,
          locale.font?.variable,
          'overflow-x-hidden antialiased'
        )}
      >
        <WrappedProviders>{children}</WrappedProviders>
      </body>
    </html>
  )
}
