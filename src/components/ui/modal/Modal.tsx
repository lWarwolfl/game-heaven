'use client'

import Button from '@/components/ui/Button/Button'
import type React from 'react'
import { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

export function Modal({ children, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const modalElement = modalRef.current
    if (!modalElement) return

    const handleClose = (event: MouseEvent) => {
      if (event.target === modalElement) {
        onClose()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    modalElement.addEventListener('click', handleClose)
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      modalElement.removeEventListener('click', handleClose)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return createPortal(
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white p-6 dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="default"
          className="absolute right-2 top-2"
          onClick={onClose}
          aria-label="Close modal"
        >
          X
        </Button>
        {children}
      </div>
    </div>,
    document.body
  )
}
