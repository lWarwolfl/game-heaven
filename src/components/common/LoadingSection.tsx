import React from 'react'
import { SvgSpinner12Dots } from '@/components/icons/SvgSpinner12Dots'

const LoadingSection = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <SvgSpinner12Dots className="size-12 opacity-80" />
    </div>
  )
}

export default LoadingSection
