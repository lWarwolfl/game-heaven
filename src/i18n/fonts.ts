import { Inter, Vazirmatn } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-lexend',
})
export const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazirmatn',
})

export type Fonts = typeof inter | typeof vazirmatn
