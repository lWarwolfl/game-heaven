import type { SVGProps } from 'react'
import React from 'react'

export function SolarCheckCircleLinear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx={12} cy={12} r={10}></circle>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12.5l2 2l5-5"></path>
      </g>
    </svg>
  )
}
