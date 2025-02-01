import AnimatedButton, {
  type AnimatedButtonProps,
} from '@/components/ui/AnimatedButton/AnimatedButton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AnimatedButton> = {
  title: 'Components/AnimatedButton',
  component: AnimatedButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<AnimatedButtonProps>

export const Default: Story = {
  args: {
    children: 'Click Here',
  },
}
