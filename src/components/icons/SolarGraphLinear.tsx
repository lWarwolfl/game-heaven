import type { SVGProps } from 'react'
import React from 'react'

export function SolarGraphLinear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path>
        <path
          strokeLinecap="round"
          d="m7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282c.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282s.824-.427 1.536-1.282L17 10"
        ></path>
      </g>
    </svg>
  )
}
