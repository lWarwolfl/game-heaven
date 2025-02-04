'use client'

import Button from '@/components/ui/Button/Button'
import { useModal } from '@/lib/hooks/useModal'
import { useLayoutEffect, useRef, useState } from 'react'

export function OpenModalHome() {
  const { openModal } = useModal()
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOpenModal = () => {
    openModal(
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Confirm Action</h2>
        <p>Are you sure you want to perform this action?</p>
        <input ref={inputRef} type="text" placeholder="Enter confirmation" />
        <div className="flex justify-end space-x-2">
          <Button onClick={() => document.body.click()}>Cancel</Button>
          <Button
            onClick={() => {
              setIsLoading(true)

              setTimeout(() => {
                setIsLoading(false)
                document.body.click()
              }, 2000)
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Confirm'}
          </Button>
        </div>
      </div>
    )
  }

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return <Button onClick={handleOpenModal}>Open Modal</Button>
}
