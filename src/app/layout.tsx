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
  title: 'machSitter - Childcare and Medical Consultation Services',
  description:
    'machSitter is an innovative platform for parents to find childcare providers and access medical services from specialized doctors. We bridge the gap between families and care providers, ensuring peace of mind and reliability for your needs.',
  keywords: [
    'machSitter',
    'childcare',
    'child medical services',
    'medical consultation',
    'parental services',
    'child care',
    'professional babysitter',
    'pediatric doctor',
    'parents',
    'nursing services',
    'family services',
    'home childcare',
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
