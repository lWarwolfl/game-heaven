'use client'

import { Modal } from '@/components/ui/modal/Modal'
import { useState } from 'react'

export function OpenModalHome() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsModalOpen(false)
    }, 2000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-24 dark:bg-gray-900">
      <h1 className="mb-8 text-4xl font-bold text-gray-800 dark:text-gray-200">Modal Example</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Confirm Action</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Are you sure you want to perform this action?
          </p>
          <input
            type="text"
            placeholder="Enter confirmation"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-gray-600 transition-colors hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isLoading}
              className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isLoading ? 'Processing...' : 'Confirm'}
            </button>
          </div>
        </div>
      </Modal>
    </main>
  )
}
