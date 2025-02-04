import SecondOpenModalHome from '@/components/pages/home/SecondOpenModalHome'
import AnimatedButton from '@/components/ui/AnimatedButton/AnimatedButton'

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-6">
      {/* <OpenModalHome /> */}
      <SecondOpenModalHome />

      <AnimatedButton>Animated</AnimatedButton>
    </div>
  )
}
