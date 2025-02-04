'use client'

import { ModalContext } from '@/components/providers/ModalProvider'
import { useContext } from 'react'

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
