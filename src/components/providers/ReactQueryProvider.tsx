'use client'
import { getErrorMessage } from '@/lib/utils'
import {
  keepPreviousData,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { toast } from 'sonner'
import { type PropsWithChildren, useState } from 'react'

type ReactQueryProviderProps = PropsWithChildren

export default function ReactQueryProvider(props: ReactQueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            toast.error(getErrorMessage(error))
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            toast.error(getErrorMessage(error))
          },
        }),
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000,
            placeholderData: keepPreviousData,
            retry: 1,
          },
          mutations: {
            retry: 0,
          },
        },
      })
  )

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}
