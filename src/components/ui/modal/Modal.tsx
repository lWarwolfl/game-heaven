import React, { useEffect, useRef } from 'react'
import ReactPortal from './ReactPortal'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <ReactPortal wrapperId="modal-root">
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-85"
        onMouseDown={handleOutsideClick}
        aria-modal="true"
        role="dialog"
      >
        <div
          className="relative w-full max-w-md rounded-lg bg-white p-6 dark:bg-gray-800"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </ReactPortal>
  )
}
