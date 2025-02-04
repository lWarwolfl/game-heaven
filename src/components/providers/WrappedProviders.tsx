import ToasterComponent from '@/components/common/ToasterComponent'
import { ModalProvider } from '@/components/providers/ModalProvider'
import NextIntlProvider from '@/components/providers/NextIntlProvider'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import type { PropsWithChildren } from 'react'

type WrappedProvidersProps = PropsWithChildren
const WrappedProviders = async ({ children }: WrappedProvidersProps) => {
  return (
    <ThemeProvider>
      <NextIntlProvider>
        <ModalProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <ToasterComponent />
        </ModalProvider>
      </NextIntlProvider>
    </ThemeProvider>
  )
}

export default WrappedProviders
