import { useState, type Dispatch, type SetStateAction } from 'react'
import ReactPortal from './ReactPortal'

type ModalProps = {
  isOpen: boolean
  setOn: Dispatch<SetStateAction<boolean>>
  title?: string
  promptText?: string
  handleDelete?: () => void
}

const SecondModal = ({ isOpen, setOn, title, promptText, handleDelete }: ModalProps) => {
  const [disabled, setDisabled] = useState<boolean>(false)

  if (!isOpen) return null

  const confirmDelete = (): void => {
    setDisabled(true)
    if (handleDelete) handleDelete()
  }

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md rounded-lg bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold">{title}</h3>
          <p className="mb-6">{promptText}</p>
          <div className="flex justify-between">
            <button
              className="rounded bg-gray-200 px-4 py-2"
              onClick={() => setOn(false)}
              disabled={disabled}
            >
              NO, CANCEL
            </button>
            <button
              className="rounded bg-red-500 px-4 py-2 text-white"
              onClick={confirmDelete}
              disabled={disabled}
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>
    </ReactPortal>
  )
}

export default SecondModal
