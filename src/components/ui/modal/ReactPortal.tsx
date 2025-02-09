'use client'
import { type ReactNode, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const defaultReactPortalProps = {
  wrapperId: 'react-portal',
}

type ReactPortalProps = {
  children: ReactNode
  wrapperId: string
} & typeof defaultReactPortalProps

const ReactPortal = ({ children, wrapperId }: ReactPortalProps) => {
  const [wrapper, setWrapper] = useState<Element | null>(null)

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)

    let created = false
    if (!element) {
      created = true
      const divElement = document.createElement('div')
      divElement.setAttribute('id', wrapperId)
      document.body.appendChild(divElement)
      element = divElement
    }

    setWrapper(element)

    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [wrapperId])

  if (wrapper === null) return null

  return createPortal(children, wrapper)
}

ReactPortal.defaultProps = defaultReactPortalProps

export default ReactPortal
