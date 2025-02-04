'use client'

import { Modal } from '@/components/ui/modal/Modal'
import {
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { createRoot } from 'react-dom/client'

interface ModalContextType {
  openModal: (content: ReactNode) => void
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalId, setModalId] = useState(0)

  const openModal = useCallback(
    (content: ReactNode) => {
      const newModalId = modalId + 1
      setModalId(newModalId)

      const modalElement = document.createElement('div')
      modalElement.id = `modal-${newModalId}`
      document.body.appendChild(modalElement)

      const root = createRoot(modalElement)

      const closeModal = () => {
        root.unmount()
        document.body.removeChild(modalElement)
      }

      root.render(<Modal onClose={closeModal}>{content}</Modal>)
    },
    [modalId]
  )

  const contextValue = useMemo(() => ({ openModal }), [openModal])

  useLayoutEffect(() => {
    return () => {
      // Clean up any remaining modals when the provider is unmounted
      document.querySelectorAll('[id^="modal-"]').forEach((el) => el.remove())
    }
  }, [])

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
}
