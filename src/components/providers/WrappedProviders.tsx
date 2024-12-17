import ToasterComponent from '@/components/common/ToasterComponent'
import NextIntlProvider from '@/components/providers/NextIntlProvider'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import type { PropsWithChildren } from 'react'

type WrappedProvidersProps = PropsWithChildren
const WrappedProviders = async ({ children }: WrappedProvidersProps) => {
  return (
    <ThemeProvider>
      <NextIntlProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <ToasterComponent />
      </NextIntlProvider>
    </ThemeProvider>
  )
}

export default WrappedProviders
