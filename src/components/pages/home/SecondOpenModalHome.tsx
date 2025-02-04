'use client'

import SecondModal from '@/components/ui/secondModal/SecondModal'
import { useState } from 'react'

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleDelete = async () => {
    console.log('Deleted.')
    setOpenModal(false) // Close the modal after deletion
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => setOpenModal(true)}
      >
        Delete
      </button>
      <SecondModal
        isOpen={openModal}
        setOn={setOpenModal}
        title="Delete comment"
        promptText="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
        handleDelete={handleDelete}
      />
    </div>
  )
}
