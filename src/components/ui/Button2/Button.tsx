import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
  'h-10 rounded-md bg-primary px-4 tracking-wider text-primary-foreground hover:bg-primary/70 focus:bg-primary/85 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: { variant: { default: '' } },
    defaultVariants: { variant: 'default' },
  }
)

export type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, className }))} {...props} />
}
