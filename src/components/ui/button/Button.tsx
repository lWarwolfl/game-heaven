import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva('', {
  variants: { variant: { default: '' } },
  defaultVariants: { variant: 'default' },
})

export type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, className }))} {...props}></button>
}
