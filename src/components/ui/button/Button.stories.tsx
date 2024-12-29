import Button, { type ButtonProps } from '@/components/ui/button/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Click Here',
  },
}
