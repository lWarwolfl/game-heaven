'use client'

import { cn } from '@/lib/utils'
import React from 'react'

export type AnimatedButtonProps = React.ComponentProps<'button'>

export default function AnimatedButton({ className, children, ...props }: AnimatedButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const boxRef = React.useRef<HTMLDivElement>(null)

  function onMouseEnter(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (ref.current && boxRef.current) {
      const corner = closestEdge(event, ref.current)

      if (corner) {
        boxRef.current.style.top = corner.top
        boxRef.current.style.right = corner.right
        boxRef.current.style.bottom = corner.bottom
        boxRef.current.style.left = corner.left
      }
    }
  }

  function closestEdge(
    mouse: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    elem: HTMLButtonElement
  ) {
    const elemBounding = elem?.getBoundingClientRect()

    const elementLeftEdge = elemBounding.left
    const elementTopEdge = elemBounding.top
    const elementRightEdge = elemBounding.right
    const elementBottomEdge = elemBounding.bottom

    const mouseX = mouse.clientX
    const mouseY = mouse.clientY

    const topEdgeDist = Math.abs(elementTopEdge - mouseY)
    const bottomEdgeDist = Math.abs(elementBottomEdge - mouseY)
    const leftEdgeDist = Math.abs(elementLeftEdge - mouseX)
    const rightEdgeDist = Math.abs(elementRightEdge - mouseX)

    const min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist)

    switch (min) {
      case leftEdgeDist:
        return { top: `${topEdgeDist}px`, right: '', bottom: '', left: '-0.5px' }
      case rightEdgeDist:
        return { top: `${topEdgeDist}px`, right: '-0.5px', bottom: '', left: '' }
      case topEdgeDist:
        return { top: '-0.5px', right: '', bottom: '', left: `${leftEdgeDist}px` }
      case bottomEdgeDist:
        return { top: '', right: '', left: `${leftEdgeDist}px`, bottom: '-0.5px' }
    }
  }

  return (
    <button
      ref={ref}
      onMouseEnter={onMouseEnter}
      className={cn(className, 'group relative overflow-hidden rounded-md bg-muted')}
      {...props}
    >
      <div
        ref={boxRef}
        className="absolute z-10 size-[1px] flex-shrink-0 origin-center scale-0 rounded-full bg-primary transition-transform duration-700 ease-in-out group-hover:scale-[700]"
      />

      <span className="relative z-50 inline-flex h-10 items-center justify-center px-4 tracking-wider text-primary transition-colors duration-300 ease-in-out group-hover:text-primary-foreground">
        {children}
      </span>
    </button>
  )
}
