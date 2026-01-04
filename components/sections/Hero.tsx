'use client'

import Typewriter from 'typewriter-effect'
import { TYPING_WORDS, SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="section mt-32 md:mt-40 lg:mt-48 pb-16 md:pb-24 lg:pb-32 bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <Container className="text-center">
        <h3 className="text-base sm:text-lg md:text-2xl lg:text-2xl text-crimson-red font-bold uppercase tracking-[0.05em] md:tracking-[0.15em] lg:tracking-[0.2em] px-2 break-words">
          With Your Creative Partners For Visual Excellence
        </h3>
        
        <h1 className="text-5xl sm:text-4xl xl:text-[60px] text-white font-bold mt-6 leading-tight md:leading-normal px-2">
          Hire High Performing
        </h1>
        
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold flex justify-center items-center mt-8 px-2">
          <span className="text-crimson-red uppercase inline-block">
            <Typewriter
              options={{
                strings: [...TYPING_WORDS],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
                cursor: '|',
                wrapperClassName: 'typewriter-wrapper',
                cursorClassName: 'typewriter-cursor',
              }}
            />
          </span>
        </h2>

        <p className="text-roman-silver max-w-5xl mx-auto mt-8 leading-relaxed px-4 text-sm sm:text-base">
          Elevate your brand with a team dedicated to storytelling, innovation, and visual brilliance. From stunning visuals to cinematic masterpieces, we handle it all so you can focus on what you do best.
        </p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap px-4">
          <Button href={`mailto:${CONTACT_INFO.email}`}>
            Hire Us
          </Button>
          <Button href={SOCIAL_LINKS.fiverr} external>
            Fiverr Profile
          </Button>
        </div>
      </Container>
    </section>
  )
}