import tailwindConfig from '@/../tailwind.config'
import { rankItem } from '@tanstack/match-sorter-utils'
import type { FilterFn } from '@tanstack/react-table'
import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: Object.keys(tailwindConfig.theme.extend.boxShadow).map((v) => `shadow-${v}`),
      rounded: Object.keys(tailwindConfig.theme.extend.borderRadius).map((v) => `rounded-${v}`),
      'font-weight': Object.keys(tailwindConfig.theme.extend.fontSize).map((v) => `text-${v}`),
      'font-size': [
        {
          text: Object.keys(tailwindConfig.theme.extend.fontSize),
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getErrorMessage = (error: any) => {
  if ('message' in error) return error['message']
  return String(error)
}

export const Sleep = (delay = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export function splitPathname(pathname: string, depth = 2) {
  return pathname.split('/').at(depth)
}
export const fuzzyFilter =
  <T>(): FilterFn<T> =>
  (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({ itemRank })
    return itemRank.passed
  }
