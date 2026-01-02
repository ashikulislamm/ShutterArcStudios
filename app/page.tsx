import Hero from '@/components/sections/Hero'
import PortfolioSlider from '@/components/sections/PortfolioSlider'
import MotionGraphics from '@/components/sections/MotionGraphics'
import Services from '@/components/sections/Services'
import Skills from '@/components/sections/Skills'
import Brands from '@/components/sections/Brands'
import Counter from '@/components/sections/Counter'
import Founder from '@/components/sections/Founder'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <article>
      <Hero />
      <PortfolioSlider />
      <MotionGraphics />
      <Services />
      <Skills />
      <Brands />
      <Counter />
      <Founder />
      <Team />
      <Contact />
    </article>
  )
}