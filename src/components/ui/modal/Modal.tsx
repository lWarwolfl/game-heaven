import { cn } from '@/lib/utils'
import type React from 'react'
import { useEffect, useRef } from 'react'

interface ModalProps extends React.ComponentProps<'div'> {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
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

  return (
    <div
      ref={modalRef}
      onClick={handleOutsideClick}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/30 transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          'relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl transition-all duration-300 dark:bg-gray-800',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

const ModalContent = ({ className, children, ...props }: React.ComponentProps<'div'>) => (
  <div className={cn(className)} {...props}>
    {children}
  </div>
)
interface ModalHeaderProps extends React.ComponentProps<'div'> {
  onClose: () => void
}
const ModalHeader = ({ children, onClose, ref, className, ...props }: ModalHeaderProps) => (
  <div ref={ref} className={cn(className, 'flex items-center justify-between')} {...props}>
    <button
      className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      onClick={onClose}
      aria-label="Close modal"
    >
      X
    </button>
    {children}
  </div>
)

const ModalFooter = ({ className, children, ...props }: React.ComponentProps<'div'>) => (
  <div className={cn(className, 'flex items-center justify-between')} {...props}>
    {children}
  </div>
)

export { Modal, ModalContent, ModalFooter, ModalHeader }
