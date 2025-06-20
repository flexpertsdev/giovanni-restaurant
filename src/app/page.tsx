import HeroSection from '@/components/sections/HeroSection'
import FeaturedMenu from '@/components/sections/FeaturedMenu'
import AboutPreview from '@/components/sections/AboutPreview'
import ThursdayMusic from '@/components/sections/ThursdayMusic'
import ReservationCTA from '@/components/sections/ReservationCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedMenu />
      <AboutPreview />
      <ThursdayMusic />
      <ReservationCTA />
    </>
  )
}