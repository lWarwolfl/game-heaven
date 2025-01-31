import AnimatedButton from '@/components/ui/AnimatedButton/AnimatedButton'
import Button from '@/components/ui/Button2/Button'

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-6">
      <Button>Normal</Button>

      <AnimatedButton>Animated</AnimatedButton>
    </div>
  )
}
