import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { PropsWithChildren } from 'react'

type NextIntlProviderProps = PropsWithChildren
export const NextIntlProvider = async ({ children }: NextIntlProviderProps) => {
  const messages = await getMessages()
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}

export default NextIntlProvider
