'use client'

import { useTypingEffect } from '@/hooks/useTypingEffect'
import { TYPING_WORDS, SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  const { displayText, isSelected } = useTypingEffect(TYPING_WORDS, 80, 50, 2000)

  return (
    <section className="section mt-18">
      <Container className="text-center">
        <h3 className="text-lg md:text-2xl lg:text-3xl text-crimson-red font-bold uppercase tracking-[0.2em]">
          With Your Creative Partners For Visual Excellence
        </h3>
        
        <h1 className="text-4xl xl:text-[50px] text-white font-bold md:mt-6 leading-30">
          Hire High Performing
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold flex justify-center items-center mt-2">
          <span 
            className={`px-4 py-2 transition-all duration-300 inline-block min-w-[280px] sm:min-w-[320px] md:min-w-[450px] lg:min-w-[550px] text-center uppercase ${
              isSelected 
                ? 'bg-crimson-red text-white' 
                : 'text-crimson-red'
            }`}
          >
            {displayText}
            <span className="invisible">{displayText ? '' : 'CINEMATOGRAPHY'}</span>
          </span>
          <span className="typing-cursor ml-1">|</span>
        </h2>

        <p className="text-roman-silver max-w-5xl mx-auto mt-8 leading-relaxed">
          Elevate your brand with a team dedicated to storytelling, innovation, and visual brilliance. From stunning visuals to cinematic masterpieces, we handle it all so you can focus on what you do best.
        </p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap">
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